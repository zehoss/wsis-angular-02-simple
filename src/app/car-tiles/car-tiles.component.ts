import {Component, OnInit} from '@angular/core';
import {CarService} from './car.service';
import {Car} from './car';

@Component({
  selector: 'app-car-tiles',
  templateUrl: './car-tiles.component.html',
  styleUrls: ['./car-tiles.component.css']
})
export class CarTilesComponent implements OnInit {

  carList: Car[];

  constructor(private carService: CarService) {
  }

  ngOnInit(): void {
    this.carList = this.carService.getCars();
  }

}
