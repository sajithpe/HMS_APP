import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerService } from 'src/app/shared/customer.service';
import {MatPaginator, MatPaginatorIntl} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatDialog, MatDialogConfig, MatDialogTitle} from '@angular/material/dialog';
import { CustomerFormComponent } from '../customer-form/customer-form.component';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  dialogTitle:String = '';
  
  constructor(private service:CustomerService,
              private dialog:MatDialog
              ) { }

  customerList = new MatTableDataSource<CustomerService>();
  displayedColumns: string[] = ['custId', 'custName', 'custContact', 'custDeleteStat' , 'actions'];
  searchKey:string = "";

  @ViewChild(MatSort)
  matSort: MatSort = new MatSort;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;    

  ngOnInit(): void {
    this.service.getDataList().subscribe((cData:any) =>{
      this.customerList = new MatTableDataSource < CustomerService> (cData);
      this.customerList.sort = this.matSort;
      this.customerList.paginator = this.paginator;
      return cData;
    });
    }


    clearSearch(){

      this.searchKey= "";
      this.filterList();
  
    }
  
    filterList(){
  
      this.customerList.filter = this.searchKey.trim().toLocaleLowerCase();
  
    }
  
    addNew(){
     
      const dialogConf = new MatDialogConfig();
      dialogConf.autoFocus=true;
      dialogConf.width="60%";
      this.service.setTitle("Add New Customer");
      this.service.isShown = true;
      this.service.valid = true;
      this.service.initial = false;
      this.dialog
                .open(CustomerFormComponent,dialogConf)
                .afterClosed().subscribe(() =>{
                  this.refreshList();
                });
    }
  
  
    editRow(row:any){
      this.addNew();
      this.service.setTitle("Edit Customer Info");
      this.service.isShown = false;
      this.service.editData(row);
      this.service.valid = false;
      this.service.initial = true;
      
    }
  
  
    refreshList(){
  
      this.service.getDataList().subscribe((data:any) =>{
        this.customerList = new MatTableDataSource < CustomerService> (data);
        this.customerList.sort = this.matSort;
        this.customerList.paginator = this.paginator;
        return data;
      });  
      
    }

}
