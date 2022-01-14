import { Component, OnInit } from '@angular/core';
import {UserService} from 'src/app/shared/user.service';
import{EmployeeService} from 'src/app/shared/employee.service';
import{User} from 'src/app/shared/user.model';
import { ToastrService } from 'ngx-toastr';
import {MatDialogRef} from '@angular/material/dialog';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-role-form',
  templateUrl: './role-form.component.html',
  styleUrls: ['./role-form.component.scss']
})
export class RoleFormComponent implements OnInit {

  dialogTitle:String = '';
  empList:any
  empValid:boolean = true;
  empInitial:boolean = false;

  constructor(public service:UserService,
              public eService:EmployeeService,
              private toaster:ToastrService,
              private dialogRef:MatDialogRef<RoleFormComponent>,) { 
                
              }

  ngOnInit(): void {
    this.dialogTitle  = this.service.dTitle;   
    this.getAllEmp();
  }


  getAllEmp(){
    this.eService.getEmpList().subscribe((hL:any) =>{
     this.empList = hL;
    });  
  }

  formSubmit(uForm:NgForm){  
   
    console.log(this.service.uFormData.userId)
    if(this.service.uFormData.userId == 0){
      
      this.onSubmit(uForm);    
      
    }else{
      this.onUpdate(uForm);
              
    }    
  }

  onUpdate(uForm:NgForm){
    console.log(uForm.value)
    this.service.updateUser().subscribe(
      res=>{
        
        this.formReset(uForm);
        this.toaster.success('Saved Successfully..!','User Data');
                
      },
      err=>{
        console.log(err);
      }
    )

  }


  onSubmit(UserForm:NgForm){
   
    this.service.postUser().subscribe(
      res=>{
        
        this.formReset(UserForm);
        this.toaster.success('Saved Successfully..!','User Data');
        
      },
      err=>{
        console.log(err);
      }
    )
  }


  formReset(UserForm:NgForm){

    UserForm.form.reset();
    this.formClose();
    this.service.uFormData = new User();
    
  }


  formClose(){
    this.service.uFormData = new User()
    this.dialogRef.close();
  }

  validateId(id:number){
    this.eService.getEmp(id).subscribe(
      res=>{
                
        this.service.checkEmpID(id).subscribe(
          res=>{
            console.log(res)
            // this.empValid = false;
            // this.empInitial = true;
          },
          err=>{
            console.log(err)
          }
        )
        
      },
      err=>{
        this.toaster.error('Invalid employee..!','User Data');
      }
    )
  }

}
