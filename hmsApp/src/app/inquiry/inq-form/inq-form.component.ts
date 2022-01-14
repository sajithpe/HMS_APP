import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CustomerService } from 'src/app/shared/customer.service';
import { HotelService } from 'src/app/shared/hotel.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, NgForm } from '@angular/forms';
import { CustInquiry } from 'src/app/shared/custInquiry.model';
import { CustInquiryService } from 'src/app/shared/cust-inquiry.service';
import{MatDatepicker} from '@angular/material/datepicker';

@Component({
  selector: 'app-inq-form',
  templateUrl: './inq-form.component.html',
  styleUrls: ['./inq-form.component.scss'],
})



export class InqFormComponent implements OnInit {
  hList: any;
  cList: any;
  dialogTitle: String = '';
  idValid: boolean = false;
  idInitial: boolean = true;
  un: any;
  isShown: boolean = true;
 // iform!: NgForm;
  v:any = '';

 

  constructor(
    public hService: HotelService,
    public cService: CustomerService,
    public service: CustInquiryService,
    private toaster: ToastrService,
    private matDialog: MatDialog,
    
  ) {}

  ngOnInit(): void {
    this.getAllHotels();
    this.getAllCustomers();
    this.dialogTitle = this.service.dTitle;
    this.isShown = this.service.isShown;
    this.idInitial = this.service.initial;
    this.idValid = this.service.valid;
    this.v = this.service.v;
   
   
  }

  getAllHotels() {
    this.hService.getHotelList().subscribe((hL: any) => {
      this.hList = hL;
    });
  }

  getAllCustomers() {
    this.cService.getDataList().subscribe((cL: any) => {
      this.cList = cL;
    });
  }

  formSubmit(form: NgForm) {
    
    if (this.service.inqFormData.inqId == 0) {
      this.onSubmit(form);
    } else {
      this.onUpdate(form);
      this.formClose(form);
    }
  }

  onUpdate(form: NgForm) {
    this.service.updateData().subscribe(
      (res) => {
        this.formReset(form);
        this.toaster.success('Saved Successfully..!', 'Customer Inquiry');
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onSubmit(form: NgForm) {

    console.log(form);
    this.service.postData().subscribe(
      (res) => {
        if (this.service.inqFormData.inqId == 0) {
          this.formClose(form);
        } else {
          this.formReset(form);
        }
        this.toaster.success('Saved Successfully..!', 'Customer Inquiry');
      },
      (err) => {
        console.log(err);
      }
    );
  }

  formReset(cform: NgForm) {
    
    if (this.service.inqFormData.inqId == 0) {
      this.formClose(cform);
    }
    cform.resetForm();
    this.service.inqFormData = new CustInquiry();
    this.idValid = true;
    this.idInitial = false;
  }

  formClose(form: NgForm) {
    this.service.inqFormData = new CustInquiry();
    this.idValid = true;
    this.idInitial = false;

    if (this.service.inqFormData.customerCustId == 0) {
      this.matDialog.closeAll();
    }
  }

  validateId(id:any, form:NgForm){
               
    this.service.checkID(id).subscribe(
      res=>{

        this.un = res;     
        
        if(this.un.length == 0){
          this.toaster.warning('Customer not found ..!','Customer Data');
        }else{
                     
          this.idValid = false;
          this.idInitial = true;
          this.un = this.un[0].custId;
          form.form.get('customerCustId')?.setValue(this.un);

          
        
        }
       
      },
      err=>{
        console.log(err)
        
      }
    )
    

  }
}
