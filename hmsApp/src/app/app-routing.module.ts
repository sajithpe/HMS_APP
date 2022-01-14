import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarComponent } from './bar/bar.component';
import { CustomerComponent } from './customer/customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { HrComponent } from './hr/hr.component';
import { InoutScannerComponent } from './inout-scanner/inout-scanner.component';
import { InquiryComponent } from './inquiry/inquiry.component';
import { OrgModuleComponent } from './org-module/org-module.component';
import { PaymentComponent } from './payment/payment.component';
import { ReportsComponent } from './reports/reports.component';
import { ReservationComponent } from './reservation/reservation.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'org', component: OrgModuleComponent },
  { path: 'Customer', component:CustomerComponent},
  { path: 'Inquiry', component:InquiryComponent},
  { path: 'Reservation', component:ReservationComponent},
  { path: 'Payment', component:PaymentComponent},
  { path: 'Hr', component:HrComponent},
  { path: 'Bar', component:BarComponent},
  { path: 'Reporting', component:ReportsComponent},
  { path: 'Inout-scanner', component:InoutScannerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
