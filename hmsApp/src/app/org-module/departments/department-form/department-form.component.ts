import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Departments } from 'src/app/shared/departments.model'
import {HotelService} from 'src/app/shared/hotel.service'
import { DepartmentService } from 'src/app/shared/department.service';
import {MatDialogRef} from '@angular/material/dialog';
import { hasData } from 'jquery';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.scss']
})
export class DepartmentFormComponent implements OnInit {

  dialogTitle:String = '';
  dList:Departments[] = [];
  hList:any;
  constructor(public service:DepartmentService, 
              public hService:HotelService,
              private toaster:ToastrService,
              private dialogRef:MatDialogRef<DepartmentFormComponent>,
              ) {                            
    
   }


  ngOnInit(): void {

    this.dialogTitle  = this.service.dTitle;   
    this.getAllHotels();
    
  }


  getAllHotels(){
    this.hService.getHotelList().subscribe((hL:any) =>{
     this.hList = hL;
    });  
    
  }
  
  formSubmit(deptForm:NgForm){  
   
    console.log(this.service.dFormData.depttId)
    if(this.service.dFormData.depttId == 0){
      
      this.onSubmit(deptForm);    
      
    }else{
      this.onUpdate(deptForm);
              
    }    
  }

  onUpdate(deptForm:NgForm){
    console.log(deptForm.value)
    this.service.updateDept().subscribe(
      res=>{
        
        this.formReset(deptForm);
        this.toaster.success('Saved Successfully..!','Department Data');
                
      },
      err=>{
        console.log(err);
      }
    )

  }


  onSubmit(deptForm:NgForm){

    console.log(deptForm.value)
    this.service.postDept().subscribe(
      res=>{
        
        this.formReset(deptForm);
        this.toaster.success('Saved Successfully..!','Department Data');
        
      },
      err=>{
        console.log(err);
      }
    )
  }


  formReset(deptForm:NgForm){

    deptForm.form.reset();
    this.formClose();
    this.service.dFormData = new Departments();
    
  }


  formClose(){
    this.service.dFormData = new Departments()
    this.dialogRef.close();
  }

}
