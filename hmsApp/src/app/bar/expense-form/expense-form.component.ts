import { Component, OnInit } from '@angular/core';
import {LiqStoreExService} from 'src/app/shared/liq-store-ex.service';
import { ToastrService } from 'ngx-toastr';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import { FormGroup, NgForm } from '@angular/forms';
import { liqStoreEx } from 'src/app/shared/liqStoreEx.model';
import {HotelService} from 'src/app/shared/hotel.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.scss']
})
export class ExpenseFormComponent implements OnInit {

  dialogTitle:String = '';
  hList:any
  idValid:boolean = false;
  idInitial:boolean = true;
  un:any;
  isShown:boolean = true;
  iform!:NgForm;
  pipe = new DatePipe('en-US');
  date:Date = new Date();
 

  constructor(public service:LiqStoreExService,
              private toaster:ToastrService,
              private matDialog: MatDialog,
              public hService:HotelService
              
              ) { 
                
              }

  ngOnInit(): void {
    this.dialogTitle  = this.service.dTitle;  
    this.isShown = this.service.isShown; 
    this.idInitial = this.service.initial;
    this.idValid = this.service.valid;
    this.date = new Date();
    this.getAllHotels();
    
    
    
  
  }


  

  getAllHotels() {
    this.hService.getHotelList().subscribe((hL: any) => {
      this.hList = hL;
      console.log(this.hList);
    });
  }

  formSubmit(form:NgForm){  
   
    form.form.get('enteredOn')?.setValue( this.pipe.transform(this.date, 'YYYY-MM-dd'));
    if(this.service.iFormData.liqExId == 0){
      
      this.onSubmit(form);    
      
    }else{
      this.onUpdate(form);
      this.formClose(form);
              
    }    
  }

  onUpdate(form:NgForm){
    
    this.service.updateData().subscribe(
      res=>{
        
        this.formReset(form);
        this.toaster.success('Saved Successfully..!','Customer Data');
                
      },
      err=>{
        console.log(err);
      }
    )

  }


  onSubmit(form:NgForm){
   
    console.log(form.value);
    this.service.postData().subscribe(
      res=>{
        
        if(this.service.iFormData.liqExId == 0){
          this.formClose(form);
        }else{
          this.formReset(form);
        }
        this.toaster.success('Saved Successfully..!','Expense Data');
        
      },
      err=>{
        console.log(err);
      }
    )
  }


  formReset(cform:NgForm){
     
    console.log(this.service.iFormData.liqExId);
    if(this.service.iFormData.liqExId == 0){
      
      this.formClose(cform);   
      
    }    
    cform.resetForm();
    this.service.iFormData = new liqStoreEx();
    this.idValid = true;
    this.idInitial = false;
    
    
  }


  formClose(form:NgForm){
    this.service.iFormData = new liqStoreEx()
    this.idValid = true;
    this.idInitial = false;

    if(this.service.iFormData.liqExId == 0){

      this.matDialog.closeAll();
      
    }
    
 
  }

}
