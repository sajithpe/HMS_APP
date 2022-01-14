import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Vas} from 'src/app/shared/vas.model'
import { VasService } from 'src/app/shared/vas.service';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-vas-form',
  templateUrl: './vas-form.component.html',
  styleUrls: ['./vas-form.component.scss']
})
export class VasFormComponent implements OnInit {


  dialogTitle:String = '';
  constructor(public service:VasService, 
              private toaster:ToastrService,
              private dialogRef:MatDialogRef<VasFormComponent>,
              ) { }

  ngOnInit(): void {
    this.dialogTitle  = this.service.dTitle;
  }


  formSubmit(vasForm:NgForm){
   
    if(this.service.vFormData.vasId == 0){
      
      this.onSubmit(vasForm);    
      
    }else{
      this.onUpdate(vasForm);
              
    }    
    
  }

  onUpdate(vasForm:NgForm){
    this.service.updateVas().subscribe(
      res=>{
        
        this.formReset(vasForm);
        this.toaster.success('Saved Successfully..!','Value Added Service Data');
        
        
      },
      err=>{
        console.log(err);
      }
    )

  }

  onSubmit(vasForm:NgForm){
    this.service.postVas().subscribe(
      res=>{
        
        this.formReset(vasForm);
        this.toaster.success('Saved Successfully..!','Value Added Service Data');
        
      },
      err=>{
        console.log(err);
      }
    )
  }


  formReset(vasForm:NgForm){

    vasForm.form.reset();
    this.formClose();
    this.service.vFormData = new Vas();
    
  }


  formClose(){
    this.service.vFormData = new Vas()
    this.dialogRef.close();
  }



}
