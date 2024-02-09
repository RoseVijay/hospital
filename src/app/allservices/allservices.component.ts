import { Component } from '@angular/core';

@Component({
  selector: 'app-allservices',
  templateUrl: './allservices.component.html',
  styleUrls: ['./allservices.component.scss']
})
export class AllservicesComponent {

  ngOnInit() {
    setTimeout(() => {
      this.gotoTop();
    }, 100);
  }

  // TODO: Cross browsing
  gotoTop() {
    window.scrollTo(0, 0);
  }

}
