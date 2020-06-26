import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CarService} from '../../../car-tiles/car.service';
import {Car} from '../../../car-tiles/car';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-admin-car-edit',
  templateUrl: './admin-car-edit.component.html',
  styleUrls: ['./admin-car-edit.component.css']
})
export class AdminCarEditComponent implements OnInit {

  carEditForm = new FormGroup({
    name: new FormControl(''),
    platesNumber: new FormControl(''),
  });

  carId: number;
  car: Car;

  constructor(private route: ActivatedRoute, private carService: CarService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.carId = +params.id;
      this.carService.findById(this.carId).subscribe(car => {
        this.car = car;

        this.carEditForm = this.fb.group({
          name: [this.car.name, Validators.required],
          platesNumber: [this.car.platesNumber]
        });
      });

    });
  }

  onSubmit() {
    console.log('form submit', this.carEditForm.value);
    if (this.carEditForm.valid) {
      this.carService.save(this.carId, this.carEditForm.value).subscribe(value => {
        console.log('done', value);
      }, error => {
        console.log('error', error);
        alert(`An error occurred ${error}`);
      });
    } else {
      alert('Form is not valid!');
    }
  }

}
