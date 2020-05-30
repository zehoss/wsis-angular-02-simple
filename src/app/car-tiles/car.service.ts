import {Injectable} from '@angular/core';
import {Car} from './car';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

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
      {id: 3, carName: 'Fiat', limit: 200, price: 250, available: false},
      {id: 3, carName: 'AlfaRomeo', limit: 200, price: 250, available: false},
      {id: 4, carName: 'Mercedes', limit: 560, price: 100, available: false}
    ];
  }

  getCars(): Observable<Car[]> {
    console.log('simulating slow server connection...');
    return of(this.carList).pipe(delay(3000));
  }
}