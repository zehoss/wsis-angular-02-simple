import {Injectable} from '@angular/core';
import {Car} from './car';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private carList: Car[];

  constructor(private httpClient: HttpClient) {
  }

  getCars(): Observable<Car[]> {
    return this.httpClient.get<Car[]>('http://api-car-rental.aws.blackfernsoft.pl:8080/rental/cars/list');
  }

  findById(carId: number): Car {
    return this.carList.find(car => car.id === carId);
  }
}
