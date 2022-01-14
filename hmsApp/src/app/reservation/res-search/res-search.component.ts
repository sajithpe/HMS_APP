import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CustInquiryService } from 'src/app/shared/cust-inquiry.service';
import {MatPaginator, MatPaginatorIntl} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatDialog, MatDialogConfig, MatDialogTitle} from '@angular/material/dialog';
import { ResFormComponent } from '../../reservation/res-form/res-form.component';
import { ReservationService } from 'src/app/shared/reservation.service';

@Component({
  selector: 'app-res-search',
  templateUrl: './res-search.component.html',
  styleUrls: ['./res-search.component.scss']
})
export class ResSearchComponent implements OnInit {

  dialogTitle:String = '';
  
  constructor(private service:CustInquiryService,
              private resService:ReservationService,
              private dialog:MatDialog
              ) { }

  inqList = new MatTableDataSource<CustInquiryService>();
  displayedColumns: string[] = ['inqId', 'custName', 'hotelName', 'inqDescription' , 'inqRoomType' , 'inqStatus' ,'actions'];
  searchKey:string = "";

  @ViewChild(MatSort)
  matSort: MatSort = new MatSort;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;   


  ngOnInit(): void {
    this.service.getFilteredList().subscribe((cData:any) =>{
      this.inqList = new MatTableDataSource < CustInquiryService> (cData);
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
  
      this.service.getDataList().subscribe((data:any) =>{
        this.inqList = new MatTableDataSource < CustInquiryService> (data);
        this.inqList.sort = this.matSort;
        this.inqList.paginator = this.paginator;
        return data;
      });  
      
    }
  }
