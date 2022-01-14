import { Injectable } from '@angular/core';
import { Departments } from './departments.model';
import {HttpClient} from '@angular/common/http';
import { HotelService } from './hotel.service';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http:HttpClient) { }

    readonly baseUrl = 'https://localhost:44389/api/Departments'
    dFormData:Departments = new Departments(); 
    deptList: Departments[] = [];
    dTitle:String = '';



    postDept(){

      return this.http.post(this.baseUrl, this.dFormData);
              
    }


    updateDept(){

      return this.http.put(`${this.baseUrl}/${this.dFormData.depttId}`, this.dFormData);     
      
    }


    getDeptList() {
      return this.http.get(this.baseUrl);
      
    }


    editDept(row:Departments){
      
      this.dFormData = row;
    }


    setTitle(ttext:String){

      this.dTitle = ttext;
    }
}
