import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PaymentService } from 'src/app/shared/payment.service';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import { ReservationService } from 'src/app/shared/reservation.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-pay-list',
  templateUrl: './pay-list.component.html',
  styleUrls: ['./pay-list.component.scss']
})
export class PayListComponent implements OnInit {

  dialogTitle:String = '';
  
  constructor(private service:PaymentService,
              private resService:ReservationService,
              private dialog:MatDialog,
              private toaster:ToastrService
              ) { }

  inqList = new MatTableDataSource<PaymentService>();
  displayedColumns: string[] = ['paymentId', 'resId', 'roomName', 'paymentAmount' , 'paymentDate'];
  searchKey:string = "";

  @ViewChild(MatSort)
  matSort: MatSort = new MatSort;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;   

  ngOnInit(): void {
    this.service.getDataList().subscribe((cData:any) =>{
      
      this.inqList = new MatTableDataSource <PaymentService> (cData);
      this.inqList.sort = this.matSort;
      this.inqList.paginator = this.paginator;
      return cData;
    });
    }

    clearSearch(){

      this.searchKey= "";
      this.filterList();
  
    }
  
    filterList(){
  
      this.inqList.filter = this.searchKey.trim().toLocaleLowerCase();
  
    }

  
  
    refreshList(){
  
      this.service.getDataList().subscribe((data:any) =>{
        this.inqList = new MatTableDataSource < PaymentService> (data);
        this.inqList.sort = this.matSort;
        this.inqList.paginator = this.paginator;
        return data;
      });  
      
    }

}
