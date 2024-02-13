import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/sevices/product.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-allservices',
  templateUrl: './allservices.component.html',
  styleUrls: ['./allservices.component.scss']
})
export class AllservicesComponent implements OnInit {
  productList: any = []
  seletedCategoryIndex: number = 0;
  categoryList: any = ['Health Check-ups', 'Equipment Rentals', 'Care at Home','Physiotherapy']
  constructor(private productService: ProductService, private router: Router) { }
  ngOnInit(): void {
    this.selectCategory('Health Check-ups', 0)
    setTimeout(() => {
      this.gotoTop();
    }, 100);
  }

  // TODO: Cross browsing
  gotoTop() {
    window.scrollTo(0, 0);
  }
  viewProduct(product: any) {
    this.router.navigate(['/servicedetails', product.id])
  }
  selectCategory(category: string, i: number) {
    this.seletedCategoryIndex = i
    this.productService.getProductCategory(category).subscribe((res) => {
      this.productList = res.data;
    })
  }

}
