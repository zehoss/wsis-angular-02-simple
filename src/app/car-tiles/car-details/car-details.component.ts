import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Car} from '../car';
import {CarService} from '../car.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  carId: number;
  car: Car;

  constructor(private route: ActivatedRoute, private carService: CarService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // parametr jest typu String, dlatego musimy wymusić, żeby został zrzutowany na typ number
      this.carId = +params.id;
      this.car = this.carService.findById(this.carId);
    });
  }

}
