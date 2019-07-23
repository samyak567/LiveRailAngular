import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Train } from '../models/Train';
import { LiveTrain } from '../models/LiveTrain';

@Injectable({
  providedIn: 'root'
})
export class TrainService {
  trainNo: string = "19019";
  date: string = "20190722";
  url: string = 'http://localhost:7777/LiveRail/rail/liveStation?stationCode=';
  constructor(private http: HttpClient) { }

  // getTrains():Observable<Train[]>{
  //   console.log("getTrains service called");
  //   return this.http.get<Train[]>(this.url);
  // }

  // getTrains():Observable<LiveTrain>{
  //   return this.http.post(this.url,)
  //   .map(data => this.handleData(data));
  // }

  getTrains(stationCode): Observable<Train[]> {
    return this.http.get<Train[]>(this.url+stationCode);
  }
}
