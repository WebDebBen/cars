import { Component, OnInit } from '@angular/core';

const cars_json = [
  {
   type: "honda",
   name: "Honda 3 Series Gran Limousine",
   market_status: 1,
   running: 11000,
   address: "Ottawa",
   searched: "7.5 k",
   visited: "17.2 k",
   sold: "1.k"
  },
  {
    type: "bmw",
    name: "BMW 3 Series Gran Limousine",
    market_status: 1,
    running: 13200,
    address: "Ottawa",
    searched: "7.2 k",
    visited: "17.1 k",
    sold: "2.k"
   },
   {
    type: "bmw",
    name: "BMW 3 Series Gran Limousine",
    market_status: 2,
    running: 14200,
    address: "Bogota",
    searched: "5.5 k",
    visited: "12.2 k",
    sold: "0.1k"
   },
   {
    type: "honda",
    name: "Honda 3 Series Gran Limousine",
    market_status: 1,
    running: 22000,
    address: "Ottawa",
    searched: "2.5 k",
    visited: "27.2 k",
    sold: "1.2k"
   },
   {
    type: "honda",
    name: "Honda 3 Series Gran Limousine",
    market_status: 1,
    running: 11000,
    address: "Ottawa",
    searched: "9.5 k",
    visited: "97.2 k",
    sold: "1.k"
   },
   {
    type: "honda",
    name: "Honda 3 Series Gran Limousine",
    market_status: 1,
    running: 11000,
    address: "Ottawa",
    searched: "6.5 k",
    visited: "67.2 k",
    sold: "1.k"
   },
   {
    type: "bmw",
    name: "BMW 3 Series Gran Limousine",
    market_status: 1,
    running: 21000,
    address: "Ottawa",
    searched: "4.5 k",
    visited: "27.2 k",
    sold: "1.k"
   }
]

const car_sell_json = [
  {
    type: "bmw",
    img: "bmw.png",
    label: "top of the last week",
    percent: 90
  },
  {
    type: "Toyoda",
    img: "bmw.png",
    label: "",
    percent: 49
  },
  {
    type: "honda",
    img: "honda.png",
    label: "",
    percent: 68
  },
  {
    type: "Chevrolet",
    img: "honda.png",
    label: "",
    percent: 90
  },
  {
    type: "Volkswagen",
    img: "bmw.png",
    label: "",
    percent: 72
  },
  {
    type: "Skoda",
    img: "honda.png",
    label: "",
    percent: 47
  },
  {
    type: "Nissan",
    img: "bmw.png",
    label: "",
    percent: 56
  },
]

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
	cars;
  carSells;
  curItem;
  activeIndex = 1;

  constructor() {
    this.cars = cars_json;
    this.curItem = cars_json[2];
    this.carSells = car_sell_json;
   }

  ngOnInit(): void {
  }

  select_item(item: any, ind: any ): void{
    this.curItem = item;
    this.activeIndex = ind;
  }

}
