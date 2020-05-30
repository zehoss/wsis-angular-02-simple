import {Injectable} from '@angular/core';
import {Car} from './car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private carList: Car[];

  constructor() {
    this.carList = [
      {id: 1, carName: 'Fiat', limit: 500, price: 200, available: true},
      {id: 2, carName: 'Volvo', limit: 300, price: 300, available: false},
      {id: 3, carName: 'Audi', limit: 100, price: 250, available: true},
      {id: 4, carName: 'Mercedes', limit: 560, price: 100, available: false}
    ];
  }

  getCars(): Car[] {
    return this.carList;
  }
}
