import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  divone:boolean = true;
  divtwo:boolean = false;
  divthree:boolean = false;

  faqone = false;
  faqtwo = false;
  faqthree = false;
  faqfour = false;

  constructor(){}

  showslider(divname: string) {
    console.log("div name : ", divname);
    if(divname === "one") {
      this.divone = true;
      this.divtwo = false;
      this.divthree = false;
    } else if(divname === "two") {
      this.divone = false;
      this.divtwo = true;
      this.divthree = false;
    } else if(divname === "three") {
      this.divone = false;
      this.divtwo = false;
      this.divthree = true;
    }
  }

  faqclicked(faqname: string) {
    console.log("div name : ", faqname);
    if(faqname === "one") {
      this.faqone = true;
      this.faqtwo = false;
      this.faqthree = false;
      this.faqfour = false;
    } else if(faqname === "two") {
      this.faqtwo = true;
      this.faqone = false;
      this.faqthree = false;
      this.faqfour = false;
    } else if(faqname === "three") {
      this.faqthree = true;
      this.faqtwo = false;
      this.faqone = false;
      this.faqfour = false;
    } else if(faqname === "four") {
      this.faqfour = true;
      this.faqtwo = false;
      this.faqthree = false;
      this.faqone = false;
    } 
  }
}
