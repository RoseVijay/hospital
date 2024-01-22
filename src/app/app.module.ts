import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RazorpayComponent } from './razorpay/razorpay.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ParvathyhomecareComponent } from './parvathyhomecare/parvathyhomecare.component';
import { LeadershipComponent } from './leadership/leadership.component';
import { HomedoctorconsultationComponent } from './homedoctorconsultation/homedoctorconsultation.component';
import { HomenursingComponent } from './homenursing/homenursing.component';
import { HomephysiotherapyComponent } from './homephysiotherapy/homephysiotherapy.component';
import { HomehealthcheckupsComponent } from './homehealthcheckups/homehealthcheckups.component';
import { LabtestathomeComponent } from './labtestathome/labtestathome.component';
import { MedicalequipmentrentalComponent } from './medicalequipmentrental/medicalequipmentrental.component';
import { CaregiverforelderlyComponent } from './caregiverforelderly/caregiverforelderly.component';
import { HomexrayComponent } from './homexray/homexray.component';
import { ServicedetailComponent } from './servicedetail/servicedetail.component';
import {ProductService} from './shared/sevices/product.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RazorpayComponent,
    HeaderComponent,
    FooterComponent,
    ParvathyhomecareComponent,
    LeadershipComponent,
    HomedoctorconsultationComponent,
    HomenursingComponent,
    HomephysiotherapyComponent,
    HomehealthcheckupsComponent,
    LabtestathomeComponent,
    MedicalequipmentrentalComponent,
    CaregiverforelderlyComponent,
    HomexrayComponent,
    ServicedetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
