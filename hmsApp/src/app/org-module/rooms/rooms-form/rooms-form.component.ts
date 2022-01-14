import { Component, OnInit } from '@angular/core';
import {RoomService} from 'src/app/shared/room.service';
import{Rooms} from 'src/app/shared/rooms.model';
import { ToastrService } from 'ngx-toastr';
import {HotelService} from 'src/app/shared/hotel.service'
import {MatDialogRef} from '@angular/material/dialog';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-rooms-form',
  templateUrl: './rooms-form.component.html',
  styleUrls: ['./rooms-form.component.scss']
})
export class RoomsFormComponent implements OnInit {

  dialogTitle:String = '';
  hList:any

  constructor(public service:RoomService,
              public hService:HotelService,
              private toaster:ToastrService,
              private dialogRef:MatDialogRef<RoomsFormComponent>,) { 
                
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

  formSubmit(rForm:NgForm){  
   
    console.log(this.service.rFormData.roomId)
    if(this.service.rFormData.roomId == 0){
      
      this.onSubmit(rForm);    
      
    }else{
      this.onUpdate(rForm);
              
    }    
  }

  onUpdate(rForm:NgForm){
    console.log(rForm.value)
    this.service.updateRoom().subscribe(
      res=>{
        
        this.formReset(rForm);
        this.toaster.success('Saved Successfully..!','Room Data');
                
      },
      err=>{
        console.log(err);
      }
    )

  }


  onSubmit(RoomForm:NgForm){

    console.log(RoomForm.value)
    this.service.postRoom().subscribe(
      res=>{
        
        this.formReset(RoomForm);
        this.toaster.success('Saved Successfully..!','Room Data');
        
      },
      err=>{
        console.log(err);
      }
    )
  }

  formReset(RoomForm:NgForm){

    RoomForm.form.reset();
    this.formClose();
    this.service.rFormData = new Rooms();
    
  }


  formClose(){
    this.service.rFormData = new Rooms()
    this.dialogRef.close();
  }


}
