

import { Component, ChangeDetectorRef } from '@angular/core';
import { ExternalLibraryService } from '../util';

declare let Razorpay: any;
declare let document: any;
@Component({
  selector: 'app-razorpay',
  templateUrl: './razorpay.component.html',
  styleUrls: ['./razorpay.component.css']
})
export class RazorpayComponent {

  constructor(private razorpayService: ExternalLibraryService, private cd:  ChangeDetectorRef) { }
  name = 'Angular';
  response:any;
  razorpayResponse:any;
  showModal = false;

  ngOnInit() {
    this.razorpayService
      .lazyLoadLibrary('https://checkout.razorpay.com/v1/checkout.js')
      .subscribe();
  }

  RAZORPAY_OPTIONS:any = {
    "key": "rzp_test_iobQaY3pNJFz1L",
    "amount": "1",
    "name": "Vijayakumar",
    "order_id": "",
    "description": "Load Wallet",
    "image": "",
    "prefill": {
      "name": "vijayakumar",
      "email": "vijayrose1053@gmail.com",
      "contact": "+919535461483",
      "method": "sdfsf",
    },
    "modal": {},
    "theme": {
      "color": "#0096C5"
    }
  };

  public proceed() {
    this.RAZORPAY_OPTIONS.amount = 1 + '00';

    // binding this object to both success and dismiss handler
    this.RAZORPAY_OPTIONS['handler'] = this.razorPaySuccessHandler.bind(this);


    let razorpay = new Razorpay(this.RAZORPAY_OPTIONS)
    razorpay.open();
  }

  public razorPaySuccessHandler(response:any) {
    console.log(response);
    this.razorpayResponse = 'Razorpay Response '+ response.razorpay_payment_id;
    this.showModal = true;
    this.cd.detectChanges()
    document.getElementById('#razorpay-response').style.display = 'block';
  }

  public test() {
    document.getElementById('response-modal').style.display = 'block';
    this.response = `dummy text`;
  }


}

