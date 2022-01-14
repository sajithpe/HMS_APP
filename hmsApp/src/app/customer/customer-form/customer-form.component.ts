import { Component, OnInit } from '@angular/core';
import {CustomerService} from 'src/app/shared/customer.service';
import { ToastrService } from 'ngx-toastr';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import { FormGroup, NgForm } from '@angular/forms';
import { Customer } from 'src/app/shared/customer.model';


@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {
  dialogTitle:String = '';
  dList:any
  idValid:boolean = false;
  idInitial:boolean = true;
  un:any;
  isShown:boolean = true;
  iform!:NgForm;
  // public dialogref!:MatDialogRef<CustomerFormComponent>
 

  constructor(public service:CustomerService,
              private toaster:ToastrService,
              private matDialog: MatDialog
              
              ) { 
                
              }

  ngOnInit(): void {
    this.dialogTitle  = this.service.dTitle;  
    this.isShown = this.service.isShown; 
    this.idInitial = this.service.initial;
    this.idValid = this.service.valid;
    
    
    
    this.getAll();
  }


  getAll(){
    this.service.getDataList().subscribe((hL:any) =>{
     this.dList = hL;
    });  
  }

  formSubmit(form:NgForm){  
   
    console.log(this.service.custFormData.custId)
    if(this.service.custFormData.custId == 0){
      
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
   
    this.service.postData().subscribe(
      res=>{
        
        if(this.service.custFormData.custId == 0){
          this.formClose(form);
        }else{
          this.formReset(form);
        }
        this.toaster.success('Saved Successfully..!','Customer Data');
        
      },
      err=>{
        console.log(err);
      }
    )
  }


  formReset(cform:NgForm){
     
    console.log(this.service.custFormData.custId);
    if(this.service.custFormData.custId == 0){
      
      this.formClose(cform);   
      
    }    
    cform.resetForm();
    this.service.custFormData = new Customer();
    this.idValid = true;
    this.idInitial = false;
    
    
  }


  formClose(form:NgForm){
    this.service.custFormData = new Customer()
    this.idValid = true;
    this.idInitial = false;

    if(this.service.custFormData.custId == 0){

      this.matDialog.closeAll();
      
    }
    
 
  }


  validateId(id:number){
               
        this.service.checkID(id).subscribe(
          res=>{

            this.un = res;

            
            
            if(this.un.length == 0){
              this.idValid = false;
              this.idInitial = true;
            }else{
                         
              this.toaster.info('Customer: '+this.un[0].custName+' is already registered ..!','Customer Data');
            
            }
           
          },
          err=>{
            console.log(err)
            
          }
        )
        
    
  }

}