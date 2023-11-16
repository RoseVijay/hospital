import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RazorpayComponent} from './razorpay/razorpay.component'
import {HomeComponent} from './home/home.component'
import { ParvathyhomecareComponent } from './parvathyhomecare/parvathyhomecare.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent, data: {pageName: 'Home'}
  },
  {
    path: 'razorpay',
    component: RazorpayComponent, data: {pageName: 'Razorpay'}
  },
  { 
    path: 'parvathyhomecare',
    component: ParvathyhomecareComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
