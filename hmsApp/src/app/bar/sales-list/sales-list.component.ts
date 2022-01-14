import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { LiqStoreExService } from 'src/app/shared/liq-store-ex.service';
import {LiqStoreInService} from 'src/app/shared/liq-store-in.service';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import { ReservationService } from 'src/app/shared/reservation.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.scss']
})
export class SalesListComponent implements OnInit {

  dialogTitle:String = '';
  
  constructor(private service:LiqStoreInService,
              private inService:LiqStoreExService,
              private dialog:MatDialog,
              private toaster:ToastrService
              ) { }

  iList = new MatTableDataSource<LiqStoreInService>();
  displayedColumns: string[] = ['incomeId', 'liqBotCount', 'liqShotCount', 'liqValue' , 'enteredOn'];
  searchKey:string = "";

  @ViewChild(MatSort)
  matSort: MatSort = new MatSort;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;   

  ngOnInit(): void {

    this.service.getDataList().subscribe((cData:any) =>{
      
      this.iList = new MatTableDataSource <LiqStoreInService> (cData);
      this.iList.sort = this.matSort;
      this.iList.paginator = this.paginator;
      return cData;
    });
    }

    clearSearch(){

      this.searchKey= "";
      this.filterList();
  
    }
  
    filterList(){
  
      this.iList.filter = this.searchKey.trim().toLocaleLowerCase();
  
    }

  
  
    refreshList(){
  
      this.service.getDataList().subscribe((data:any) =>{
        this.iList = new MatTableDataSource < LiqStoreInService> (data);
        this.iList.sort = this.matSort;
        this.iList.paginator = this.paginator;
        return data;
      });  
      
    }

}
