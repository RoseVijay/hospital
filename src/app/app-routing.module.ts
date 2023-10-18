import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RazorpayComponent} from './razorpay/razorpay.component'

const routes: Routes = [
  {
    path: '',
    component: RazorpayComponent, data: {pageName: 'Razorpay'}
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
