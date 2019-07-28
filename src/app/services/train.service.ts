import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Train } from '../models/Train';
import { LiveTrain } from '../models/LiveTrain';
import { TrainBwStation } from '../models/TrainBwStation';
import { TrainRoute } from '../models/TrainRoute';
import { RescheduledTrain } from '../models/RescheduledTrain';

@Injectable({
  providedIn: 'root'
})
export class TrainService {
  url: string = 'http://localhost:7777/LiveRail/rail/liveStation?stationCode=';
  url1: string ;

  
  constructor(private http: HttpClient) { }

  getTrains(stationCode): Observable<Train> {
    return this.http.get<Train>(this.url+stationCode);
  }

  getLiveTrainStatus(trainNo,date): Observable<LiveTrain> {
    this.url1 = 'http://localhost:7777/LiveRail/rail/liveTrain?trainNo='+trainNo+'&date='+date; 
    return this.http.get<LiveTrain>(this.url1);
  }

  getTrainBwStation(fromStation,toStation){
    this.url1 = 'http://localhost:7777/LiveRail/rail/trainsBetweenStations?fromStation='+fromStation+'&toStation='+toStation; 
    return this.http.get(this.url1);  // Taking data in the same format as given by spring-mvc.
  }

  getTrainRoute(TrainNo): Observable<TrainRoute[]>{
    this.url1 = 'http://localhost:7777/LiveRail/rail/trainSchedule?trainNo='+TrainNo;
    return this.http.get<TrainRoute[]>(this.url1);
  }

  getRescheduledTrain(date): Observable<RescheduledTrain[]>{
    this.url1 ='http://localhost:7777/LiveRail/rail/rescheduledTrains?date='+date;
    return this.http.get<RescheduledTrain[]>(this.url1);
  }
}
