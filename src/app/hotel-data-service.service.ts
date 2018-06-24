import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HotelDataServiceService {

  constructor( private http : HttpClient) { }

  /*sends get request and return its response data */
  getHotelData(){
    return this
              .http
              .get('https://my-json-server.typicode.com/tharindumalshan1/postman/markers');
  }

}
