import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  constructor(private http:HttpClient) { 

  }

  getData(): Observable<any> {
    return this.http.get("https://datausa.io/api/data?drilldowns=Nation&measures=Population");
  }

  getInfo(): Observable<any> {
    return this.http.get("https://s3-us-west-2.amazonaws.com/s.cdpn.io/218423/data1.json");
  }
}
