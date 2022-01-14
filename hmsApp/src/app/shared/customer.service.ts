import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from './customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  readonly baseUrl = 'https://localhost:44389/api/Customers';
  readonly empUrl = 'https://localhost:44389/api/Customers/custcon';
  custFormData:Customer = new Customer(); 
  custList: Customer[] = [];
  dTitle:String = '';
  isShown: boolean = true;
  valid:boolean = true;
  initial:boolean = false;
  ;


  postData(){

    return this.http.post(this.baseUrl, this.custFormData);
            
  }


  updateData(){

    return this.http.put(`${this.baseUrl}/${this.custFormData.custId}`, this.custFormData);     
    
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


  editData(row:Customer){
    
    this.custFormData = row;
  }

  
  setTitle(ttext:String){

    this.dTitle = ttext;
  }


  toggleButton(){
    this.isShown = false;
  }

}
