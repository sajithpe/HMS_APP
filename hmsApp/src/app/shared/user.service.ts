import { Injectable } from '@angular/core';
import { User } from './user.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  readonly baseUrl = 'https://localhost:44389/api/Users';
  readonly empUrl = 'https://localhost:44389/api/Users/getemp';
  uFormData:User = new User(); 
  uList: User[] = [];
  dTitle:String = '';
  isShown: boolean = true;
  valid:boolean = true;
  initial:boolean = false;


  postUser(){

    return this.http.post(this.baseUrl, this.uFormData);
            
  }


  updateUser(){

    return this.http.put(`${this.baseUrl}/${this.uFormData.userId}`, this.uFormData);     
    
  }


  deleteUser(id:number){

    return this.http.delete(`${this.baseUrl}/${id}`);   
  }


  getUserList() {
    return this.http.get(this.baseUrl);
    
  }

  checkEmpID(id:number){
    
    
    return this.http.get(`${this.baseUrl}/emp?empid=${id}`);   
    // return this.http.get('https://localhost:44389/api/Users/getemp?empid=1');
  }


  editUser(row:User){
    
    this.uFormData = row;
  }

  
  setTitle(ttext:String){

    this.dTitle = ttext;
  }


  toggleButton(){
    this.isShown = false;
  }

}
