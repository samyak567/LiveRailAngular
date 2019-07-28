import { Component, OnInit } from '@angular/core';
import { TrainBwStation } from 'src/app/models/TrainBwStation';
import { TrainService } from 'src/app/services/train.service';

@Component({
  selector: 'app-train-bw-station',
  templateUrl: './train-bw-station.component.html',
  styleUrls: ['./train-bw-station.component.css']
})
export class TrainBwStationComponent implements OnInit {
  trains:any;
  constructor(private trainService: TrainService) { }
  fromStation : string;
  clicked : boolean = false;
  toStation : string;
  getTrain = true;
  getTrainTable = false;


  fromStation1 : string;
  toStation1 : string;
  totalTrains : string;
  sourceLatitude : any;
  destinationLatitude : any;
  sourceLongitude : any;
  destinationLongitude : any;
  ngOnInit() {
    
  }
  stscode(){
    this.getTrain = false;
    this.getTrainTable = false;
    this.trainService.getTrainBwStation(this.fromStation,this.toStation)
    .subscribe(data => { 
      this.trains= data ; 
      this.fromStation1 = this.trains.sourceStationName;
      this.toStation1 = this.trains.toStationName;
      this.totalTrains = this.trains.TotalTrains;
      this.sourceLatitude = parseFloat(this.trains.fromStationInfo.Latitude);
      this.destinationLatitude = parseFloat(this.trains.toStationInfo.Latitude);
      this.sourceLongitude = parseFloat(this.trains.fromStationInfo.Longitude);
      this.destinationLongitude = parseFloat(this.trains.toStationInfo.Longitude);
      this.getTrain = true;
      this.getTrainTable = true;
      });
  }

}