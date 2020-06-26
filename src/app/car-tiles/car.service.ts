import {Injectable} from '@angular/core';
import {Car} from './car';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient: HttpClient) {
  }

  getCars(): Observable<Car[]> {
    return this.httpClient.get<Car[]>('http://api-car-rental.aws.blackfernsoft.pl:8080/rental/cars/list');
  }

  findById(carId: number): Observable<Car> {
    return this.httpClient.get<Car>(`http://api-car-rental.aws.blackfernsoft.pl:8080/rental/cars/${carId}`);
  }

  create(value: any) {
    return this.httpClient.post(`http://api-car-rental.aws.blackfernsoft.pl:8080/rental/cars/`, value);
  }

  save(carId: number, value: any): Observable<any> {
    return this.httpClient.put(`http://api-car-rental.aws.blackfernsoft.pl:8080/rental/cars/${carId}`, value);
  }
}
