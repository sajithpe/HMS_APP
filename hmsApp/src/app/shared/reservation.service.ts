import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { reservation } from './reservation.model';
import { NgForm } from '@angular/forms';
import { ResFormComponent } from '../reservation/res-form/res-form.component'


@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http:HttpClient) { }

  readonly baseUrl = 'https://localhost:44389/api/Reservations';
  readonly empUrl = 'https://localhost:44389/api/Customers';
  readonly secondUrl = 'https://localhost:44389/api/Reservations/avlble?';
  iFormData:reservation = new reservation(); 
  dataList: reservation[] = [];
  dTitle:String = '';
  isShown: boolean = false;
  valid:boolean = true;
  initial:boolean = true;
  v:any;


  postData(){

    return this.http.post(this.baseUrl, this.iFormData);
            
  }


  updateData(){

    return this.http.put(`${this.baseUrl}/${this.iFormData.resId}`, this.iFormData);     
    
  }

  checkIn(id:any){

    return this.http.put(`${this.baseUrl}/chkin/${id}`, this.iFormData);     
  }

  checkOut(id:any){

    return this.http.put(`${this.baseUrl}/chkout/${id}`, this.iFormData);     
  }

  deleteId(id:number){

    return this.http.delete(`${this.baseUrl}/${id}`);   
  }


  getDataList() {
    return this.http.get(this.baseUrl);
    
  }

  getFilteredList() {
    //return this.http.get(this.baseUrl);
   // return this.http.get(`${this.baseUrl/pndg`);
   return this.http.get(`${this.baseUrl}/${'pndg'}`); 
    
  }

  checkID(d1:any, d2:any, ht:string){
    
    
    return this.http.get(`${this.secondUrl}dt1=${d1}&dt2=${d2}&hd=${ht}`);   
    // return dt1=2022-01-15&dt2=2022-01-18&hd=1'
  }


  
  editData(row:reservation){
    
    this.iFormData = row;
    
  }

  
  setTitle(ttext:String){

    this.dTitle = ttext;
  }

  setValue(v:any){
    this.v = v;
  }

  toggleButton(){
    this.isShown = false;
  }
}
