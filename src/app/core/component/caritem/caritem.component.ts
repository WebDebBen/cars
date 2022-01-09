import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-caritem',
  templateUrl: './caritem.component.html',
  styleUrls: ['./caritem.component.scss']
})
export class CaritemComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
  }

}
