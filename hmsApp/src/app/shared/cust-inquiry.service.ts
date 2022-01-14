import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustInquiry } from './custInquiry.model';
import { NgForm } from '@angular/forms';
import { InqFormComponent } from '../inquiry/inq-form/inq-form.component'


@Injectable({
  providedIn: 'root'
})
export class CustInquiryService {

  constructor(private http:HttpClient) { }

  readonly baseUrl = 'https://localhost:44389/api/CustInquiries';
  readonly empUrl = 'https://localhost:44389/api/Customers';
  inqFormData:CustInquiry = new CustInquiry(); 
  custInqList: CustInquiry[] = [];
  dTitle:String = '';
  isShown: boolean = true;
  valid:boolean = true;
  initial:boolean = false;
  v:any;


  postData(){

    return this.http.post(this.baseUrl, this.inqFormData);
            
  }


  updateData(){

    return this.http.put(`${this.baseUrl}/${this.inqFormData.inqId}`, this.inqFormData);     
    
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

  checkID(id:number){
    
    
    return this.http.get(`${this.empUrl}/custcon?ccontact=${id}`);   
    // return this.http.get('https://localhost:44389/api/Users/getemp?empid=1');
  }


  
  editData(row:CustInquiry){
    
    this.inqFormData = row;
    
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
