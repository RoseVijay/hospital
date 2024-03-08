import { Component } from '@angular/core';
import {ProductService} from '../shared/sevices/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-homephysiotherapy',
  templateUrl: './homephysiotherapy.component.html',
  styleUrls: ['./homephysiotherapy.component.scss']
})
export class HomephysiotherapyComponent {

  productList: any = [];
  categoryList: any = ['Health Check-ups', 'Equipment Rentals', 'Care at Home','Physiotherapy'];

  constructor(private productService:ProductService,private router: Router) { }  
  ngOnInit(): void {
    this.selectCategory('Physiotherapy');
  }
  viewProduct(product: any) {
    this.router.navigate(['/servicedetails', product.id])
  }
  selectCategory(category: string) {
    this.productService.getProductCategory(category).subscribe((res) => {
      this.productList = res.data;
    })
  }
}