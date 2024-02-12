import { Component, ChangeDetectorRef, OnInit, Input } from '@angular/core';
import { ExternalLibraryService } from '../util';
import { ProductService } from '../shared/sevices/product.service'
declare let Razorpay: any;
declare let document: any;
@Component({
  selector: 'app-razorpay',
  templateUrl: './razorpay.component.html',
  styleUrls: ['./razorpay.component.scss']
})
export class RazorpayComponent implements OnInit {
  @Input() productData: any;
  RAZORPAY_OPTIONS: any;
  constructor(private razorpayService: ExternalLibraryService, private cd: ChangeDetectorRef, private productService: ProductService) {

  }
  name = 'Angular';
  response: any;
  razorpayResponse: any;
  showModal = false;

  ngOnInit() {
    this.razorpayService
      .lazyLoadLibrary('https://checkout.razorpay.com/v1/checkout.js')
      .subscribe();
  }

  public proceed() {
    let createOrder = {
      amount: this.productData?.price + '00',
      currency: "INR",
      receipt: 'receipt#1hospital',
      notes: {
        "description": this.productData?.name
      }
    }
    this.productService.createOrder(createOrder).subscribe((order) => {
      this.productService.getUserDetails().subscribe((res) => {
        this.RAZORPAY_OPTIONS = {
          "key": res.data?.razorpay_key,
          "amount": this.productData?.price + '00',
          "name": res.data?.name,
          "currency": "INR",
          "order_id": order?.data?.id,
          "description": this.productData?.name,
          "image": "",
          "prefill": {
            "name": res.data?.name,
            "email": res.data?.email,
            "contact": res.data?.phone,
            "method": "sdfsf",
          },
          "notes": {
            "description": this.productData?.name,
          },
          "modal": {},
          "theme": {
            "color": "#0096C5"
          }
        };
        this.RAZORPAY_OPTIONS['handler'] = this.razorPaySuccessHandler.bind(this);
        let razorpay = new Razorpay(this.RAZORPAY_OPTIONS)
        razorpay.open();
      });
    })
  }

  public razorPaySuccessHandler(response: any) {
    console.log(response);
    let payment = {
      RAZORPAY_OPTIONS: this.RAZORPAY_OPTIONS,
      razorpay_payment_id: response.razorpay_payment_id
    }
    this.productService.payment(payment).subscribe((res) => {
      console.log(res.data);
    })
    this.razorpayResponse = 'Razorpay Response ' + response.razorpay_payment_id;
    this.showModal = true;
    this.cd.detectChanges()
    document.getElementById('#razorpay-response').style.display = 'block';
  }

  public test() {
    document.getElementById('response-modal').style.display = 'block';
    this.response = `dummy text`;
  }


}

