import { Component, AfterViewInit,OnInit } from '@angular/core';
import {ProductService} from '../shared/sevices/product.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit,OnInit {

  divone: boolean = true;
  divtwo: boolean = false;
  divthree: boolean = false;
productList: any = []
  faqone = false;
  faqtwo = false;
  faqthree = false;
  faqfour = false;
  days: any;
  hours: any;
  minutes: any;
  seconds: any;
  seletedCategoryIndex: number = 0;
  categoryList: any = ['Health Check-ups', 'Equipment Rentals', 'Care at Home','Physiotherapy']
  constructor(private productService:ProductService) { }

  ngAfterViewInit() {
    setInterval(() => {
      this.countDown();
    }, 1000);
  }
  ngOnInit(): void {
    this.selectCategory('Health Check-ups', 0)
  }
  selectCategory(category: string, i: number) {
    this.seletedCategoryIndex = i
    this.productService.getProductCategory(category).subscribe((res) => {
      this.productList = res.data;
    })
  }
  showslider(divname: string) {
    console.log("div name : ", divname);
    if (divname === "one") {
      this.divone = true;
      this.divtwo = false;
      this.divthree = false;
    } else if (divname === "two") {
      this.divone = false;
      this.divtwo = true;
      this.divthree = false;
    } else if (divname === "three") {
      this.divone = false;
      this.divtwo = false;
      this.divthree = true;
    }
  }

  faqclicked(faqname: string) {
    console.log("div name : ", faqname);
    if (faqname === "one") {
      this.faqone = true;
      this.faqtwo = false;
      this.faqthree = false;
      this.faqfour = false;
    } else if (faqname === "two") {
      this.faqtwo = true;
      this.faqone = false;
      this.faqthree = false;
      this.faqfour = false;
    } else if (faqname === "three") {
      this.faqthree = true;
      this.faqtwo = false;
      this.faqone = false;
      this.faqfour = false;
    } else if (faqname === "four") {
      this.faqfour = true;
      this.faqtwo = false;
      this.faqthree = false;
      this.faqone = false;
    }
  }

  countDown() {
    let targetDate = new Date(2023, 11, 31);
    let targetTime = targetDate.getTime();
    let date = new Date();
    let now = date.getTime();
    let difference = targetTime - now;
    difference = difference / (1000 * 60 * 60 * 24);
    this.days = Math.floor(difference);
    this.hours = this.isValidTime((23 - date.getHours())) ;
    this.minutes = this.isValidTime(60 - date.getMinutes());
    this.seconds = this.isValidTime(60 - date.getSeconds());
  }
  isValidTime(time:number){
    return time > 0 ? time : 0;
  }
}
