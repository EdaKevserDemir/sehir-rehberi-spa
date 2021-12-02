import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../models/city';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  constructor(protected httpClient: HttpClient) {}
  private path = ' http://localhost:61061/api/';

  getCities(): Observable<City[]> {
    return this.httpClient.get<City[]>(this.path + 'cities');
  }
}
