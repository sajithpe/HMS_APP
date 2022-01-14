import { DataSource } from '@angular/cdk/collections';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HotelService } from 'src/app/shared/hotel.service';
import {MatPaginator, MatPaginatorIntl} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatDialog, MatDialogConfig, MatDialogTitle} from '@angular/material/dialog';
import { HotelFormComponent } from '../hotel-form/hotel-form.component';




@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit {
 
  dialogTitle:String = '';

  constructor(private hService:HotelService,
              private dialog:MatDialog
              ) { }

  hotelList = new MatTableDataSource<HotelService>();
  displayedColumns: string[] = ['hotelName', 'area', 'address1', 'hotelType' , 'deleteStatus' , 'actions'];
  searchHotel:string = "";

  @ViewChild(MatSort)
  matSort: MatSort = new MatSort;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;


  ngOnInit(): void {

    
    this.hService.getHotelList().subscribe((hData:any) =>{
      this.hotelList = new MatTableDataSource < HotelService> (hData);
      this.hotelList.sort = this.matSort;
      this.hotelList.paginator = this.paginator;
      return hData;
    });  

  }


  clearSearch(){

    this.searchHotel = "";
    this.filterHotel();

  }

  filterHotel(){

    this.hotelList.filter = this.searchHotel.trim().toLocaleLowerCase();

  }

  addNewHotel(){
   
    const dialogConf = new MatDialogConfig();
    dialogConf.autoFocus=true;
    dialogConf.width="60%";
    this.hService.setTitle("Add New Hotel");
    this.dialog
              .open(HotelFormComponent,dialogConf)
              .afterClosed().subscribe(() =>{
                this.refreshHotels();
              });
  }


  editHotel(row:any){
    this.addNewHotel();
    this.hService.setTitle("Edit Hotel Info");
    this.hService.editHotel(row);
    
  }


  refreshHotels(){

    this.hService.getHotelList().subscribe((hData:any) =>{
      this.hotelList = new MatTableDataSource < HotelService> (hData);
      this.hotelList.sort = this.matSort;
      this.hotelList.paginator = this.paginator;
      return hData;
    });  
    
  }
}
