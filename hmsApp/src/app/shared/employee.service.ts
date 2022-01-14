import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Employee} from './employee.model'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  readonly baseUrl = 'https://localhost:44389/api/Employees'
  eFormData:Employee = new Employee(); 
  eList: Employee[] = [];
  dTitle:String = '';


  postEmp(){

    return this.http.post(this.baseUrl, this.eFormData);
            
  }


  updateEmp(){

    return this.http.put(`${this.baseUrl}/${this.eFormData.empId}`, this.eFormData);     
    
  }


  deleteEmp(id:number){

    return this.http.delete(`${this.baseUrl}/${id}`);   
  }


  getEmpList() {
    return this.http.get(this.baseUrl);
    
  }

  getEmp(id:number){

    return this.http.get(`${this.baseUrl}/${id}`); 
  }

  editRoom(row:Employee){
    
    this.eFormData = row;
  }


  
  setTitle(ttext:String){

    this.dTitle = ttext;
  }
  
}
