import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RazorpayComponent } from './razorpay/razorpay.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ParvathyhomecareComponent } from './parvathyhomecare/parvathyhomecare.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RazorpayComponent,
    HeaderComponent,
    FooterComponent,
    ParvathyhomecareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
