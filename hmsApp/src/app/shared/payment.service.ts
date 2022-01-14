import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {payment} from './payment.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http:HttpClient) { }

  readonly baseUrl = 'https://localhost:44389/api/payments';
  readonly empUrl = 'https://localhost:44389/api/Reservations/';
  readonly secondUrl = 'https://localhost:44389/api/Reservations/avlble?';
  iFormData:payment = new payment(); 
  dataList: payment[] = [];
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

  checkID(ht:string){
    
    
    return this.http.get(`${this.empUrl}${ht}`);   
    // return dt1=2022-01-15&dt2=2022-01-18&hd=1'
  }


  
  editData(row:payment){
    
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
