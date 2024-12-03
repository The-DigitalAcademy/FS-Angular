import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BwmDataService {
  private jsonURL = '../assets/bmw-data.json'; // Path to the JSON file

  constructor(private http: HttpClient) { }

  getCarData(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonURL);
  }
}
