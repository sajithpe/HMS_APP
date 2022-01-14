import { Injectable } from '@angular/core';
import { Rooms } from './rooms.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http:HttpClient) { }

  readonly baseUrl = 'https://localhost:44389/api/Rooms'
  rFormData:Rooms = new Rooms(); 
  rList: Rooms[] = [];
  dTitle:String = '';


  postRoom(){

    return this.http.post(this.baseUrl, this.rFormData);
            
  }


  updateRoom(){

    return this.http.put(`${this.baseUrl}/${this.rFormData.roomId}`, this.rFormData);     
    
  }


  deleteRoom(id:number){

    return this.http.delete(`${this.baseUrl}/${id}`);   
  }


  getRoomList() {
    return this.http.get(this.baseUrl);
    
  }


  editRoom(row:Rooms){
    
    this.rFormData = row;
  }


  
  setTitle(ttext:String){

    this.dTitle = ttext;
  }

}
