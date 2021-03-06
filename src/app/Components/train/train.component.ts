import { Component, OnInit } from '@angular/core';
import { Train } from 'src/app/models/Train';
import { TrainService } from 'src/app/services/train.service';
import { LiveTrain } from 'src/app/models/LiveTrain';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.css']
})
export class TrainComponent implements OnInit {
  trains:any;
  liveTrain: LiveTrain;
  constructor(private trainService: TrainService) { }
  stationCode : string;
  getTrain = true;
  getTrainTable = false;
  ngOnInit() {
    
  }
  stscode(){
    this.getTrain = false;
    this.getTrainTable = false;
    this.trainService.getTrains(this.stationCode)
    .subscribe(data => { 
      console.log(data)
      this.trains= data ; 
      this.getTrain=true;
      this.getTrainTable=true;
      });
  }
}
 