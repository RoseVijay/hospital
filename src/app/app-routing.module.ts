import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RazorpayComponent} from './razorpay/razorpay.component'
import {HomeComponent} from './home/home.component'
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
import { AllservicesComponent } from './allservices/allservices.component';
import { LoginComponent } from './login/login.component';

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
  },
  {
    path: 'leadership',
    component: LeadershipComponent
  },
  {
    path: 'homedoctorconsultation',
    component: HomedoctorconsultationComponent
  },
  {
    path: 'homenursing',
    component: HomenursingComponent
  },
  {
    path: 'homephysiotherapy',
    component: HomephysiotherapyComponent
  },
  {
    path: 'homehealthcheckups',
    component: HomehealthcheckupsComponent
  },
  {
    path: 'labtestathome',
    component: LabtestathomeComponent
  },
  {
    path: 'medicalequipmentrental',
    component: MedicalequipmentrentalComponent
  },
  {
    path: 'caregiverforelderly',
    component: CaregiverforelderlyComponent
  },
  {
    path: 'homexray',
    component: HomexrayComponent
  },
  {
    path: 'servicedetails/:id',
    component: ServicedetailComponent
  },
  {
    path: 'allservices',
    component: AllservicesComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
