import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { liqStoreEx } from './liqStoreEx.model';

@Injectable({
  providedIn: 'root'
})
export class LiqStoreExService {

  constructor(private http:HttpClient) { }

  readonly baseUrl = 'https://localhost:44389/api/LiqStoreExpenses';
  readonly empUrl = 'https://localhost:44389/api/Customers/custcon';
  iFormData:liqStoreEx = new liqStoreEx(); 
  iList: liqStoreEx[] = [];
  dTitle:String = '';
  isShown: boolean = true;
  valid:boolean = true;
  initial:boolean = false;
  ;


  postData(){

    return this.http.post(this.baseUrl, this.iFormData);
            
  }


  updateData(){

    return this.http.put(`${this.baseUrl}/${this.iFormData.liqExId}`, this.iFormData);     
    
  }


  deleteId(id:number){

    return this.http.delete(`${this.baseUrl}/${id}`);   
  }


  getDataList() {
    return this.http.get(this.baseUrl);
    
  }

  checkID(id:number){
    
    
    return this.http.get(`${this.baseUrl}/custcon?ccontact=${id}`);   
    // return this.http.get('https://localhost:44389/api/Users/getemp?empid=1');
  }


  editData(row:liqStoreEx){
    
    this.iFormData = row;
  }

  
  setTitle(ttext:String){

    this.dTitle = ttext;
  }


  toggleButton(){
    this.isShown = false;
  }

}
