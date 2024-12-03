import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  private API = '../assets/bmw-data.json'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getCarImages(): Observable<any> {
    return this.http.get<any>(this.API);
  }

}
