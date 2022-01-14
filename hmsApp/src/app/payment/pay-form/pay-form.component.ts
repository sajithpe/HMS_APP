import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { payment } from 'src/app/shared/payment.model';
import { ReservationService } from 'src/app/shared/reservation.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PaymentService } from 'src/app/shared/payment.service';
import {RoomService} from 'src/app/shared/room.service';
import { DatePipe } from '@angular/common';
// import { ReservationComponent } from '../reservation.component';

@Component({
  selector: 'app-pay-form',
  templateUrl: './pay-form.component.html',
  styleUrls: ['./pay-form.component.scss'],
})
export class PayFormComponent implements OnInit {
  dialogTitle: String = '';
  // dList:reservation[] = [];
  hList: any;
  rList: any;

  idValid: boolean = false;
  idInitial: boolean = true;
  idLock:boolean = true;
  un: any;
  isShown: boolean = true;
  // iform!: NgForm;
  v: any = '';
  d!: Date;
  date:any;
  pipe = new DatePipe('en-US');

  constructor(
    public service: PaymentService,
    public resService: ReservationService,
    private toaster: ToastrService,
    private matDialog: MatDialog,
    public rService:RoomService,
    public datepipe: DatePipe
  ) //private dialogRef:MatDialogRef<ReservationComponent>,
  {

    
  }

  ngOnInit(): void {
    this.dialogTitle = this.service.dTitle;
    // this.getAllHotels();
    this.dialogTitle = this.service.dTitle;
    this.isShown = this.service.isShown;
    this.idInitial = false;
    this.idValid = this.service.valid;
    this.v = this.service.v;
    this.getAllRooms();
    this.date = new Date();
    // this.datepipe.transform(this.date, 'yyyy-MM-dd');
   
  }


  getAllRooms(){
    this.rService.getRoomList().subscribe((rL:any) =>{
     this.rList = rL;
    });

  }

  formSubmit(form: NgForm) {
    
    if (this.service.iFormData.paymentId == 0) {
      this.onSubmit(form);
    } else {
      this.onUpdate(form);
    }
  }

  onUpdate(form: NgForm) {
    
    this.service.updateData().subscribe(
      (res) => {
        this.formReset(form);
        this.toaster.success('Saved Successfully..!', 'Department Data');
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onSubmit(form: NgForm) {
   
    this.service.postData().subscribe(
      (res) => {
        this.formReset(form);
        this.toaster.success('Saved Successfully..!', 'Department Data');
      },
      (err) => {
        console.log(err);
      }
    );
  }

  formReset(form: NgForm) {
    form.form.reset();
    this.formClose(form);
    this.service.getDataList();
    this.service.iFormData = new payment();
  }

  formClose(form: NgForm) {
    this.service.iFormData = new payment();
    this.idValid = true;
    this.idInitial = false;

    if (this.service.iFormData.resId == 0) {
      this.matDialog.closeAll();
    }
  }

  validateId(h1: any, form: NgForm) {
   
    const ht = h1;


    this.service.checkID(ht).subscribe(
      (res) => {
        this.un = res;
        // console.log(res);
        if (this.un.length == 0) {
          this.toaster.warning('Reservation not found ..!', 'Payment Data');
        } else {
          this.idValid = false;
          this.idInitial = true;
          //this.un = this.un[0].roomId;
          //this.rList = res;
          console.log(this.un.roomId);
          form.form.get('roomId')?.setValue(this.un.roomId);
          form.form.get('hoteId')?.setValue(this.un.hotelId);
          form.form.get('custId')?.setValue(this.un.custId);
          form.form.get('paymentDate')?.setValue( this.pipe.transform(this.date, 'YYYY-MM-dd'));
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onSelectChange(newValue: any, list: any, form: NgForm) {
    var res = list.filter((obj: { roomId: any }) => obj.roomId == newValue);

    this.un = res;
    this.un = this.un[0].roomPrice;
    console.log(this.un);
    form.form.get('resPrice')?.setValue(this.un);
  }
}
