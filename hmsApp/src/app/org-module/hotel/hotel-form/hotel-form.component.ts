import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Hotel } from 'src/app/shared/hotel.model'
import { HotelService } from 'src/app/shared/hotel.service';
import {MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-hotel-form',
  templateUrl: './hotel-form.component.html',
  styleUrls: ['./hotel-form.component.scss']
})

export class HotelFormComponent implements OnInit {

  dialogTitle:String = '';
  constructor(public service:HotelService, 
              private toaster:ToastrService,
              private dialogRef:MatDialogRef<HotelFormComponent>,
              ) {
    
   }

  ngOnInit(): void {
    
    this.dialogTitle  = this.service.dTitle;
  
  }


  formSubmit(hotelForm:NgForm){
   
    if(this.service.hFormData.hotelId == 0){
      
      this.onSubmit(hotelForm);    
      
    }else{
      this.onUpdate(hotelForm);
              
    }    
    
  }

  onUpdate(hotelForm:NgForm){
    this.service.updateHotel().subscribe(
      res=>{
        
        this.formReset(hotelForm);
        this.toaster.success('Saved Successfully..!','Hotel Data');
        
        
      },
      err=>{
        console.log(err);
      }
    )

  }

  onSubmit(hotelForm:NgForm){
    this.service.postHotel().subscribe(
      res=>{
        
        this.formReset(hotelForm);
        this.toaster.success('Saved Successfully..!','Hotel Data');
        
      },
      err=>{
        console.log(err);
      }
    )
  }


  formReset(hotelForm:NgForm){

    hotelForm.form.reset();
    this.formClose();
    this.service.hFormData = new Hotel();
    
  }


  formClose(){
    this.service.hFormData = new Hotel()
    this.dialogRef.close();
  }

 
}

  
