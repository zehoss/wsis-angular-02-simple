import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-car-tile',
  templateUrl: './car-tile.component.html',
  styleUrls: ['./car-tile.component.css']
})
export class CarTileComponent implements OnInit {

  @Input() carName;
  @Input() price;
  @Input() limit;


  constructor() {
  }

  ngOnInit(): void {
  }

}
