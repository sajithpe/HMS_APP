import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { reservation } from 'src/app/shared/reservation.model';
import {HotelService} from 'src/app/shared/hotel.service';
import { ReservationService } from 'src/app/shared/reservation.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { ReservationComponent } from '../reservation.component';
import { RoomService } from 'src/app/shared/room.service';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-res-form',
  templateUrl: './res-form.component.html',
  styleUrls: ['./res-form.component.scss']
})
export class ResFormComponent implements OnInit {

  dialogTitle:String = '';
  // dList:reservation[] = [];
  hList:any;
  rList:any;
  
  idValid: boolean = false;
  idInitial: boolean = true;
  un: any;
  isShown: boolean = true;
 // iform!: NgForm;
  v:any = '';
  d!:Date;
  // cd1:Date = new Date();
  // cd2:Date = new Date();

  pipe = new DatePipe('en-US'); // Use your own locale


  constructor(public service:ReservationService, 
              public hService:HotelService,
              private toaster:ToastrService,
              private matDialog: MatDialog,
              private rService:RoomService,
              private datepicker:MatDatepickerModule,
              private nativeDate:MatNativeDateModule,
              
              
              //private dialogRef:MatDialogRef<ReservationComponent>,
              ) {                            
    
   }


  ngOnInit(): void {

    this.dialogTitle  = this.service.dTitle;   
    this.getAllHotels();
    this.dialogTitle = this.service.dTitle;
    this.isShown = this.service.isShown;
    this.idInitial = this.service.initial;
    this.idValid = this.service.valid;
    this.v = this.service.v;
    
  }


  getAllHotels(){
    this.hService.getHotelList().subscribe((hL:any) =>{
     this.hList = hL;
    });  
    
  }

  // getAllRooms(){
  //   this.rService.getRoomList().subscribe((rL:any) =>{
  //    this.hList = rL;
  //   });  
    
  // }
  
  formSubmit(form:NgForm){  
   
    console.log(this.service.iFormData.resId)
    if(this.service.iFormData.resId == 0){
      
      this.onSubmit(form);    
      
    }else{
      this.onUpdate(form);
              
    }    
  }

  onUpdate(form:NgForm){
    console.log(form.value)
    this.service.updateData().subscribe(
      res=>{
        
        this.formReset(form);
        this.toaster.success('Saved Successfully..!','Department Data');
                
      },
      err=>{
        console.log(err);
      }
    )

  }


  onSubmit(form:NgForm){

    console.log(form.value)
    this.service.postData().subscribe(
      res=>{
        
        this.formReset(form);
        this.toaster.success('Saved Successfully..!','Department Data');
        
      },
      err=>{
        console.log(err);
      }
    )
  }


  formReset(form:NgForm){

    form.form.reset();
    this.formClose(form);
    this.service.iFormData = new reservation();
    
  }


  formClose(form: NgForm) {
    this.service.iFormData = new reservation();
    this.idValid = true;
    this.idInitial = false;

    if (this.service.iFormData.resId == 0) {
      this.matDialog.closeAll();
    }
  }

  validateId(d1:any, d2:any, h1:any, form:NgForm){
              
      const cd1 = this.pipe.transform(d1, 'mediumDate');
      const cd2 = this.pipe.transform(d2, 'mediumDate');
      const ht = h1;
      
      // console.log(ht);
      
    this.service.checkID(cd1, cd2,ht).subscribe(
      res=>{

        this.un = res;     
        // console.log(res);
        if(this.un.length == 0){
          this.toaster.warning('Hotel not found ..!','Reservation Data');
        }else{
                     
          this.idValid = false;
          this.idInitial = true;
          // this.un = this.un[0].custId;
          this.rList = res;
          //form.form.get('customerCustId')?.setValue(this.un);       
        }
       
      },
      err=>{
        console.log(err)
        
      }
    )
  }

  onSelectChange(newValue:any, list:any, form:NgForm) {
    
    var res = list.filter((obj: { roomId: any; })=> obj.roomId == newValue
    );

    this.un = res;
    this.un = this.un[0].roomPrice;
    console.log(this.un);
    form.form.get('resPrice')?.setValue(this.un);
}

}
