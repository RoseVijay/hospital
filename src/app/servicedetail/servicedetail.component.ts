import { Component } from '@angular/core';

@Component({
  selector: 'app-servicedetail',
  templateUrl: './servicedetail.component.html',
  styleUrls: ['./servicedetail.component.scss']
})
export class ServicedetailComponent {
  servicelist: boolean = false;
  aboutmoreless: boolean = false;
  faqone: boolean = false;
  faqtwo: boolean = false;
  faqthree: boolean = false;
  faqfour: boolean = false;
  faqfive: boolean = false;

  showtextlist() {
    this.servicelist = !this.servicelist;
  }

  readmore() {
    this.aboutmoreless = true;
  }

  readless() {
    this.aboutmoreless = false;
  }  

  showfaqans(faqname: string) {
    console.log("div name : ", faqname);
    if (faqname === "one") {
      this.faqone = !this.faqone;
    }
    if (faqname === "two") {
      this.faqtwo = !this.faqtwo;
    }
    if (faqname === "three") {
      this.faqthree = !this.faqthree;
    }
    if (faqname === "four") {
      this.faqfour = !this.faqfour;
    }
    if (faqname === "five") {
      this.faqfive = !this.faqfive;
    }
  }
}
