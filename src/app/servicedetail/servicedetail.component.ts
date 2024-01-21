import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-servicedetail',
  templateUrl: './servicedetail.component.html',
  styleUrls: ['./servicedetail.component.scss']
})
export class ServicedetailComponent {
  // @ViewChild("divhome") divhomeEl: ElementRef;
  @ViewChild('divhome') targetElement: any;
  @ViewChild('divservice') divServiceEl: any;
  @ViewChild('divdummy') divDumEl: any;
  servicelist: boolean = false;
  aboutmoreless: boolean = false;
  faqone: boolean = false;
  faqtwo: boolean = false;
  faqthree: boolean = false;
  faqfour: boolean = false;
  faqfive: boolean = false;

  
  isShow: boolean = false;
  topPosToStartShowing = 20;

  ngOnInit() {
    setTimeout(() => {
      this.gotoTop();
    }, 500);
    
    
  }

  ngAfterViewInit() {    
    const height = this.targetElement.nativeElement.offsetHeight;
    console.log("div home height : ",height);

    const divServiceHt = this.divServiceEl.nativeElement.offsetHeight;
    console.log("div Service height : ",divServiceHt);

    const divServiceTop = this.divServiceEl.nativeElement.offsetTop;
    console.log("div Service Top : ",divServiceTop);

    const divDumHt = this.divDumEl.nativeElement.offsetTop;
    console.log("div Above footer height : ",divDumHt);
}

// TODO: Cross browsing
gotoTop() {
  window.scrollTo(0, 0);
}

  // constructor(private el: ElementRef) {}

  @HostListener('window:scroll')

  checkScroll() {
      
    // window의 scroll top
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    console.log('[scroll]', scrollPosition);

    const divServiceTopscroll = this.divServiceEl.nativeElement.offsetTop;
    console.log("div Service Top while Scroll: ",divServiceTopscroll);

    // const heigthChild = this.divhomeEl.nativeElement.offsetHeight;

    // console.log('heigthChild : ', heigthChild);
    
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

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
    // console.log("div name : ", faqname);
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
