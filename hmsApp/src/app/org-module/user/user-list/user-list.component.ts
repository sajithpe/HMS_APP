import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/shared/user.service';
import {MatPaginator, MatPaginatorIntl} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatDialog, MatDialogConfig, MatDialogTitle} from '@angular/material/dialog';
import { UserFormComponent } from '../user-form/user-form.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  dialogTitle:String = '';

  constructor(private uService:UserService,
              private dialog:MatDialog
              ) { }

  userList = new MatTableDataSource<UserService>();
  displayedColumns: string[] = ['empId', 'userName', 'empName', 'userStat' , 'actions'];
  searchUser:string = "";
            
  @ViewChild(MatSort)
  matSort: MatSort = new MatSort;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;           

  ngOnInit(): void {

    this.uService.getUserList().subscribe((uData:any) =>{
    this.userList = new MatTableDataSource < UserService> (uData);
    this.userList.sort = this.matSort;
    this.userList.paginator = this.paginator;
    return uData;
  });
  }

  clearSearch(){

    this.searchUser= "";
    this.filterUser();

  }

  filterUser(){

    this.userList.filter = this.searchUser.trim().toLocaleLowerCase();

  }

  addNewUser(){
   
    const dialogConf = new MatDialogConfig();
    dialogConf.autoFocus=true;
    dialogConf.width="60%";
    this.uService.setTitle("Add New User");
    this.uService.isShown = true;
    this.uService.valid = true;
    this.uService.initial = false;
    this.dialog
              .open(UserFormComponent,dialogConf)
              .afterClosed().subscribe(() =>{
                this.refreshUsers();
              });
  }


  editUser(row:any){
    this.addNewUser();
    this.uService.setTitle("Edit User Info");
    this.uService.isShown = false;
    this.uService.editUser(row);
    this.uService.valid = false;
    this.uService.initial = true;
    
  }


  refreshUsers(){

    this.uService.getUserList().subscribe((uData:any) =>{
      this.userList = new MatTableDataSource < UserService> (uData);
      this.userList.sort = this.matSort;
      this.userList.paginator = this.paginator;
      return uData;
    });  
    
  }

}
