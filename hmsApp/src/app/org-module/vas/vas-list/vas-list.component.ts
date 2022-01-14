import { Component, OnInit, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { VasService } from 'src/app/shared/vas.service';
import {MatPaginator, MatPaginatorIntl} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatDialog, MatDialogConfig, MatDialogTitle} from '@angular/material/dialog';
import {VasFormComponent } from '../vas-form/vas-form.component';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-vas-list',
  templateUrl: './vas-list.component.html',
  styleUrls: ['./vas-list.component.scss']
})
export class VasListComponent implements OnInit {

  dialogTitle:String = '';

  constructor(private vService:VasService,
              private dialog:MatDialog,
              private toaster:ToastrService
              ) { }

  vasList = new MatTableDataSource<VasService>();
  displayedColumns: string[] = ['vasName', 'vasValue', 'actions'];
  searchVas:string = "";
            
  @ViewChild(MatSort)
  matSort: MatSort = new MatSort;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngOnInit(): void {
    this.vService.getVasList().subscribe((vData:any) =>{
    this.vasList = new MatTableDataSource <VasService> (vData);
    this.vasList.sort = this.matSort;
    this.vasList.paginator = this.paginator;
      
      return vData;
    }); 
  }

  clearSearch(){

    this.searchVas = "";
    this.filterVas();

  }


  filterVas(){

    this.vasList.filter = this.searchVas.trim().toLocaleLowerCase();

  }

  addNewVas(){
   
    const dialogConf = new MatDialogConfig();
    dialogConf.autoFocus=true;
    dialogConf.width="60%";
    this.vService.setTitle("Add New Service");
    this.dialog
              .open(VasFormComponent,dialogConf)
              .afterClosed().subscribe(() =>{
                this.refreshVas();
              });
  }


  editVas(row:any){
    this.addNewVas();
    this.vService.setTitle("Edit Value Added Serice Info");
    this.vService.editVas(row);
    
  }

  deleteVas(row:any){
    
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      backdropClass:'bDropErr',
      data: {
          title: "Delete Service?",
          message: "You are about to delete " + row.vasName}
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
     
      if (dialogResult == true){
        this.vService.deleteVas(row.vasId).subscribe(
          res=>{
            this.refreshVas();
            this.toaster.success('Service Name '+ row.vasName+' Deleted Successfully..!','Service Data');
          },
          err=>{console.log(err)}
        )
      }else if(dialogResult==false){

      }
   });
    
  }

  refreshVas(){

    this.vService.getVasList().subscribe((vData:any) =>{
     this.vasList = new MatTableDataSource < VasService> (vData);
     this.vasList.sort = this.matSort;
      this.vasList.paginator = this.paginator;
      return vData;
    });  
    
  }

}
