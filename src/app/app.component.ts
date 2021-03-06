import { Component } from '@angular/core';

import { HotelDataServiceService } from './hotel-data-service.service';
import {hotel} from './hoteldataModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  colors = ['red','blue','green'];
  hotels: hotel[];
  constructor(private hotelService : HotelDataServiceService ){
    this.hotelService.getHotelData()
    .subscribe((data : hotel[]) => {
        this.hotels = data;
    })
    
  }
  ngOnInit(){
    this.hotelService.getHotelData()
    .subscribe((data : hotel[]) => {
        this.hotels = data;
    });
  }
  
}
