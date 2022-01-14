import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Vas} from './vas.model'

@Injectable({
  providedIn: 'root'
})
export class VasService {

  constructor(private http:HttpClient) { }

    readonly baseUrl = 'https://localhost:44389/api/VAS'
    vFormData:Vas = new Vas(); 
    vasList: Vas[] = [];
    dTitle:String = '';



   
    postVas(){
        return this.http.post(this.baseUrl, this.vFormData);
        
          
    }

    updateVas(){
      return this.http.put(`${this.baseUrl}/${this.vFormData.vasId}`, this.vFormData);     
      
    }


    getVasList() {
      return this.http.get(this.baseUrl);
      
    }

    deleteVas(id:number){

      return this.http.delete(`${this.baseUrl}/${id}`);   
    }

    editVas(row:Vas){
      this.vFormData = row;

    }


    setTitle(ttext:String){
      this.dTitle = ttext;
      
    }
}
