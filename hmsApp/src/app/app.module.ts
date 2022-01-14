import { NgModule, PipeTransform } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import{NgChartsModule} from 'ng2-charts';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { OrgModuleComponent } from './org-module/org-module.component';
import { HotelComponent } from './org-module/hotel/hotel.component';
import {HotelFormComponent} from './org-module/hotel/hotel-form/hotel-form.component';
import { DepartmentsComponent } from './org-module/departments/departments.component';
import { DepartmentFormComponent } from './org-module/departments/department-form/department-form.component';
import { DepartmentListComponent } from './org-module/departments/department-list/department-list.component';
import { RoomsComponent } from './org-module/rooms/rooms.component';
import { VasComponent } from './org-module/vas/vas.component';
import { UserComponent } from './org-module/user/user.component';
import { RolesComponent } from './org-module/roles/roles.component';
import { RoomsFormComponent } from './org-module/rooms/rooms-form/rooms-form.component';
import { RoomsListComponent } from './org-module/rooms/rooms-list/rooms-list.component';
import { ConfirmDialogComponent } from './shared/confirm-dialog/confirm-dialog.component';
import { VasListComponent } from './org-module/vas/vas-list/vas-list.component';
import { VasFormComponent } from './org-module/vas/vas-form/vas-form.component';
import { UserFormComponent } from './org-module/user/user-form/user-form.component';
import { UserListComponent } from './org-module/user/user-list/user-list.component';
import { RoleFormComponent } from './org-module/roles/role-form/role-form.component';
import { RoleListComponent } from './org-module/roles/role-list/role-list.component';
import { CustomerComponent } from './customer/customer.component';
import { InquiryComponent } from './inquiry/inquiry.component';
import { ReservationComponent } from './reservation/reservation.component';
import { PaymentComponent } from './payment/payment.component';
import { HrComponent } from './hr/hr.component';
import { BarComponent } from './bar/bar.component';
import { ReportsComponent } from './reports/reports.component';
import { CustomerFormComponent } from './customer/customer-form/customer-form.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerSearchComponent } from './customer/customer-search/customer-search.component';
import { InqFormComponent } from './inquiry/inq-form/inq-form.component';
import { InqListComponent } from './inquiry/inq-list/inq-list.component';
import { InqSearchComponent } from './inquiry/inq-search/inq-search.component';
import { ResFormComponent } from './reservation/res-form/res-form.component';
import { ResListComponent } from './reservation/res-list/res-list.component';
import { ResSearchComponent } from './reservation/res-search/res-search.component';
import { PayFormComponent } from './payment/pay-form/pay-form.component';
import { PayListComponent } from './payment/pay-list/pay-list.component';
import { PaySearchComponent } from './payment/pay-search/pay-search.component';
import { EmpFormComponent } from './hr/emp-form/emp-form.component';
import { EmpListComponent } from './hr/emp-list/emp-list.component';
import { SalaryFormComponent } from './hr/salary-form/salary-form.component';
import { AttendanceFormComponent } from './hr/attendance-form/attendance-form.component';
import { AttendanceListComponent } from './hr/attendance-list/attendance-list.component';
import { SalaryGenComponent } from './hr/salary-gen/salary-gen.component';
import { IncomeFormComponent } from './bar/income-form/income-form.component';
import { ExpenseFormComponent } from './bar/expense-form/expense-form.component';
import { SalesListComponent } from './bar/sales-list/sales-list.component';
import { InoutScannerComponent } from './inout-scanner/inout-scanner.component';
import { LoginComponent } from './login/login.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import { HotelListComponent } from './org-module/hotel/hotel-list/hotel-list.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDialogModule, MatDialogConfig} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { ExpenseListComponent } from './bar/expense-list/expense-list.component';
import { BarChartComponent } from './reports/bar-chart/bar-chart.component';
import { PieChartComponent } from './reports/pie-chart/pie-chart.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DashboardComponent,
    SidenavComponent,
    OrgModuleComponent,
    HotelComponent,
    HotelFormComponent,
    HotelListComponent,
    DepartmentsComponent,
    DepartmentFormComponent,
    DepartmentListComponent,
    RoomsComponent,
    VasComponent,
    UserComponent,
    RolesComponent,
    RoomsFormComponent,
    RoomsListComponent,
    ConfirmDialogComponent,
    VasListComponent,
    VasFormComponent,
    UserFormComponent,
    UserListComponent,
    RoleFormComponent,
    RoleListComponent,
    CustomerComponent,
    InquiryComponent,
    ReservationComponent,
    PaymentComponent,
    HrComponent,
    BarComponent,
    ReportsComponent,
    CustomerFormComponent,
    CustomerListComponent,
    CustomerSearchComponent,
    InqFormComponent,
    InqListComponent,
    InqSearchComponent,
    ResFormComponent,
    ResListComponent,
    ResSearchComponent,
    PayFormComponent,
    PayListComponent,
    PaySearchComponent,
    EmpFormComponent,
    EmpListComponent,
    SalaryFormComponent,
    AttendanceFormComponent,
    AttendanceListComponent,
    SalaryGenComponent,
    IncomeFormComponent,
    ExpenseFormComponent,
    SalesListComponent,
    InoutScannerComponent,
    LoginComponent,
    ExpenseListComponent,
    BarChartComponent,
    PieChartComponent
       
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    
    // * MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatTabsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    NgChartsModule

    
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent],
  entryComponents:[HotelFormComponent, ConfirmDialogComponent]
})
export class AppModule { }
