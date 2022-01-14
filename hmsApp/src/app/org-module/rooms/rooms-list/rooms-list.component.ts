import { Component, OnInit, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { RoomService } from 'src/app/shared/room.service';
import {MatPaginator, MatPaginatorIntl} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatDialog, MatDialogConfig, MatDialogTitle} from '@angular/material/dialog';
import { RoomsFormComponent } from '../rooms-form/rooms-form.component';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent implements OnInit {


  dialogTitle:String = '';


  constructor(private rService:RoomService,
              private dialog:MatDialog,
              private toaster:ToastrService
              ) { }

  roomList = new MatTableDataSource<RoomService>();
  displayedColumns: string[] = ['hotelName', 'roomName', 'roomDescrip', 'roomType', 'roomPrice', 'actions'];
  searchRoom:string = "";
            
  @ViewChild(MatSort)
  matSort: MatSort = new MatSort;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngOnInit(): void {

    this.rService.getRoomList().subscribe((rData:any) =>{
      this.roomList = new MatTableDataSource <RoomService> (rData);
      this.roomList.sort = this.matSort;
      this.roomList.paginator = this.paginator;
      
      return rData;
    }); 
  }

  clearSearch(){

    this.searchRoom = "";
    this.filterRoom();

  }


  filterRoom(){

    this.roomList.filter = this.searchRoom.trim().toLocaleLowerCase();

  }

  addNewRoom(){
   
    const dialogConf = new MatDialogConfig();
    dialogConf.autoFocus=true;
    dialogConf.width="60%";
    this.rService.setTitle("Add New Room");
    this.dialog
              .open(RoomsFormComponent,dialogConf)
              .afterClosed().subscribe(() =>{
                this.refreshRoom();
              });
  }


  editRoom(row:any){
    this.addNewRoom();
    this.rService.setTitle("Edit Room Info");
    this.rService.editRoom(row);
    
  }

  deleteRoom(row:any){
    
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: {
          title: "Delete Room?",
          message: "You are about to delete " + row.roomName + " of " + row.hotel.hotelName}
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
     
      if (dialogResult == true){
        this.rService.deleteRoom(row.roomId).subscribe(
          res=>{
            this.refreshRoom();
            this.toaster.success(row.roomName+' Deleted Successfully..!','Room Data');
          },
          err=>{console.log(err)}
        )
      }else if(dialogResult==false){

      }
   });
    
  }

  refreshRoom(){

    this.rService.getRoomList().subscribe((rData:any) =>{
      this.roomList = new MatTableDataSource < RoomService> (rData);
      this.roomList.sort = this.matSort;
      this.roomList.paginator = this.paginator;
      return rData;
    });  
    
  }

}
