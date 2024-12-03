// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const jsonURL = 'AngularBinding/src/assets/bmw-data.json'

@Injectable({
  providedIn: 'root'
})
export class BmwService {

  constructor(public http: HttpClient) { }
  // private jsonURL = '../../assets/bmw.json'; // Path to the JSON file

  // constructor(private http: HttpClient) { }

  // getCarData(): Observable<any[]> {
  //   return this.http.get<any[]>(this.jsonURL);
  // }
}

