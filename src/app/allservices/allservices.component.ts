import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/sevices/product.service'

@Component({
  selector: 'app-allservices',
  templateUrl: './allservices.component.html',
  styleUrls: ['./allservices.component.scss']
})
export class AllservicesComponent implements OnInit {

  productList: any = []
  constructor(private productService: ProductService) { }
  ngOnInit(): void {
    this.productService.getProduct().subscribe((res) => {
      this.productList = res.data;
    })
    setTimeout(() => {
      this.gotoTop();
    }, 100);
  }

  // TODO: Cross browsing
  gotoTop() {
    window.scrollTo(0, 0);
  }

}
