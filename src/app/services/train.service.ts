import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Train } from '../models/Train';

@Injectable({
  providedIn: 'root'
})
export class TrainService {
  url: string = 'https://indianrailapi.com/api/v2/LiveStation/apikey/da981a412ba73547666130e822e942d4/StationCode/RTM/hours/2/';
  constructor(private http: HttpClient) { }

  getTrains():Observable<any>{
    console.log("getTrains service called");
    return this.http.get<any>(this.url);
  }
}
