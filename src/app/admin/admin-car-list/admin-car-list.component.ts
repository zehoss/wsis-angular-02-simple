import {Component, OnInit} from '@angular/core';
import {CarService} from '../../car-tiles/car.service';
import {Car} from '../../car-tiles/car';

@Component({
  selector: 'app-admin-car-list',
  templateUrl: './admin-car-list.component.html',
  styleUrls: ['./admin-car-list.component.css']
})
export class AdminCarListComponent implements OnInit {

  cars: Car[];

  constructor(private carService: CarService) {
    this.carService.getCars().subscribe(cars => {
      this.cars = cars;
    });
  }

  ngOnInit(): void {
  }

}
