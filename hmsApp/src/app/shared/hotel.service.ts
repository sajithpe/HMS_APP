import { Injectable } from '@angular/core';
import { Hotel } from './hotel.model';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http:HttpClient) { }

    readonly baseUrl = 'https://localhost:44389/api/Hotels'
    hFormData:Hotel = new Hotel(); 
    hotelList: Hotel[] = [];
    dTitle:String = '';



   
    postHotel(){
        return this.http.post(this.baseUrl, this.hFormData);
        
          
    }

    updateHotel(){
      return this.http.put(`${this.baseUrl}/${this.hFormData.hotelId}`, this.hFormData);     
      
    }


    getHotelList() {
      return this.http.get(this.baseUrl);
      
    }


    editHotel(row:Hotel){
      this.hFormData = row;

    }


    setTitle(ttext:String){
      this.dTitle = ttext;
      
    }
}
