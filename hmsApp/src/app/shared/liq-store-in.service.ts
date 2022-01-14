import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {liqStoreIn} from './liqStoreIn.model'


@Injectable({
  providedIn: 'root'
})
export class LiqStoreInService {

  constructor(private http:HttpClient) { }

  readonly baseUrl = 'https://localhost:44389/api/LiqStoreIncomes';
  readonly empUrl = 'https://localhost:44389/api/Customers/custcon';
  iFormData:liqStoreIn = new liqStoreIn(); 
  iList: liqStoreIn[] = [];
  dTitle:String = '';
  isShown: boolean = true;
  valid:boolean = true;
  initial:boolean = false;
  ;


  postData(){

    return this.http.post(this.baseUrl, this.iFormData);
            
  }


  updateData(){

    return this.http.put(`${this.baseUrl}/${this.iFormData.incomeId}`, this.iFormData);     
    
  }


  


  getDataList() {
    return this.http.get(this.baseUrl);
    
  }

 


  editData(row:liqStoreIn){
    
    this.iFormData = row;
  }

  
  setTitle(ttext:String){

    this.dTitle = ttext;
  }


  

}
