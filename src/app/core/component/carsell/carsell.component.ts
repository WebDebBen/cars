import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carsell',
  templateUrl: './carsell.component.html',
  styleUrls: ['./carsell.component.scss']
})
export class CarsellComponent implements OnInit {
  @Input() data: any;
  constructor() { }
  p:number = 10;
  ngOnInit(): void {
  }

}
