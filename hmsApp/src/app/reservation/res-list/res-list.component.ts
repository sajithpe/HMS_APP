import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CustInquiryService } from 'src/app/shared/cust-inquiry.service';
import {MatPaginator, MatPaginatorIntl} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatDialog, MatDialogConfig, MatDialogTitle} from '@angular/material/dialog';
import { ResFormComponent } from '../../reservation/res-form/res-form.component';
import { ReservationService } from 'src/app/shared/reservation.service';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-res-list',
  templateUrl: './res-list.component.html',
  styleUrls: ['./res-list.component.scss']
})
export class ResListComponent implements OnInit {
  dialogTitle:String = '';
  
  constructor(private service:CustInquiryService,
              private resService:ReservationService,
              private dialog:MatDialog,
              private toaster:ToastrService
              ) { }

  inqList = new MatTableDataSource<CustInquiryService>();
  displayedColumns: string[] = ['resId', 'roomName', 'checkedIN', 'checkedOut' , 'resStatus' , 'resPrice' ,'actions'];
  searchKey:string = "";

  @ViewChild(MatSort)
  matSort: MatSort = new MatSort;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;   


  ngOnInit(): void {
    this.resService.getDataList().subscribe((cData:any) =>{
      
      this.inqList = new MatTableDataSource <CustInquiryService> (cData);
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

    checkIn(row:any){
    
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        maxWidth: "400px",
        data: {
            title: "Check the Customer IN?",
            message: "You are about to update as Checked in"}
      });
  
      dialogRef.afterClosed().subscribe(dialogResult => {
       
        if (dialogResult == true){
         
          this.resService.checkIn(row.resId).subscribe(
            res=>{
              this.refreshList();
              this.toaster.success('Customer Checked in Successfully..!','Reservation Data');
            },
            err=>{console.log(err)}
          )
        }else if(dialogResult==false){
  
        }
     });
      
    }

    checkOut(row:any){
    
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        maxWidth: "400px",
        data: {
            title: "Check the Customer Out?",
            message: "You are about to update as Checked Out"}
      });
  
      dialogRef.afterClosed().subscribe(dialogResult => {
       
        if (dialogResult == true){
         
          this.resService.checkOut(row.resId).subscribe(
            res=>{
              this.refreshList();
              this.toaster.success('Customer Checked out Successfully..!','Reservation Data');
            },
            err=>{console.log(err)}
          )
        }else if(dialogResult==false){
  
        }
     });
      
    }
    
    addNew(){
     
      const dialogConf = new MatDialogConfig();
      dialogConf.autoFocus=true;
      dialogConf.width="60%";
      this.service.setTitle("Add New");
      this.service.isShown = true;
      this.service.valid = true;
      this.service.initial = false;
      this.dialog
                .open(ResFormComponent,dialogConf)
                .afterClosed().subscribe(() =>{
                  this.refreshList();
                });
    }
  
  
    editRow(row:any){
      this.addNew();
      this.service.setTitle("Edit Iquiry Info");
      this.service.isShown = false;
      this.service.editData(row);
      this.service.valid = false;
      this.service.initial = true;
      this.resService.v = row.inqId;
      console.log(row.inqId);

      
      
    }
  
  
    refreshList(){
  
      this.resService.getDataList().subscribe((data:any) =>{
        this.inqList = new MatTableDataSource < CustInquiryService> (data);
        this.inqList.sort = this.matSort;
        this.inqList.paginator = this.paginator;
        return data;
      });  
      
    }

}
