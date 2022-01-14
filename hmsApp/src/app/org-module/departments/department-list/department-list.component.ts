import { DataSource } from '@angular/cdk/collections';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DepartmentService } from 'src/app/shared/department.service';
import {MatPaginator, MatPaginatorIntl} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatDialog, MatDialogConfig, MatDialogTitle} from '@angular/material/dialog';
import { DepartmentFormComponent } from '../department-form/department-form.component';



@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {

  dialogTitle:String = '';

  constructor(private dService:DepartmentService,
              private dialog:MatDialog

  ) { }

  deptList = new MatTableDataSource<DepartmentService>();
  displayedColumns: string[] = ['hotelName', 'deptName', 'deptStatus', 'actions'];
  searchDept:string = "";

  @ViewChild(MatSort)
  matSort: MatSort = new MatSort;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngOnInit(): void {

    this.dService.getDeptList().subscribe((dData:any) =>{
      this.deptList = new MatTableDataSource <DepartmentService> (dData);
      this.deptList.sort = this.matSort;
      this.deptList.paginator = this.paginator;
      
      return dData;
    });  
  }


  clearSearch(){

    this.searchDept = "";
    this.filterDept();

  }


  filterDept(){

    this.deptList.filter = this.searchDept.trim().toLocaleLowerCase();

  }

  addNewDept(){
   
    const dialogConf = new MatDialogConfig();
    dialogConf.autoFocus=true;
    dialogConf.width="60%";
    this.dService.setTitle("Add New Department");
    this.dialog
              .open(DepartmentFormComponent,dialogConf)
              .afterClosed().subscribe(() =>{
                this.refreshDept();
              });
  }


  editDept(row:any){
    this.addNewDept();
    this.dService.setTitle("Edit Department Info");
    this.dService.editDept(row);
    
  }


  refreshDept(){

    this.dService.getDeptList().subscribe((dData:any) =>{
      this.deptList = new MatTableDataSource < DepartmentService> (dData);
      this.deptList.sort = this.matSort;
      this.deptList.paginator = this.paginator;
      return dData;
    });  
    
  }


}
