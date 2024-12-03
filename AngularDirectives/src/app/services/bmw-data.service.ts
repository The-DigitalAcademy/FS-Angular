import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BmwDataService {

  private jsonURL = '../assets/bmw-data.json'; // Path to the JSON file

  constructor(private http: HttpClient) { }

  // getCarData(): Observable<any[]> {
  //   return this.http.get<any[]>(this.jsonURL);
  // }

  getCarData(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonURL).pipe(
      map((data: any[]) => {
        return data.map(car => ({ ...car, highlight: false }));
      })
    );
  }
}
