import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Car} from '../car';
import {CarService} from '../car.service';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {

  carId: number;
  car: Car;

  constructor(private route: ActivatedRoute, private carService: CarService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.carId = +params.id;
      this.car = this.carService.findById(this.carId);
    });
  }

  onSubmit() {
    console.log('submitted', this.car);

    // TODO:
    // this.httpClient.post...
  }
}
