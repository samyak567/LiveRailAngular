import { Component, OnInit } from '@angular/core';
import { TrainService } from 'src/app/services/train.service';
import { Train } from 'src/app/models/Train';
import { DatePipe } from '@angular/common';
import { FormControl, Validators, NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-live-train',
  templateUrl: './live-train.component.html',
  styleUrls: ['./live-train.component.css']
})
export class LiveTrainComponent implements OnInit {
  dateCtrl: FormControl;
  maxDate = new Date();
  trains:any;
  liveTrain: Train;
  getTrainStatus = true;
  getTrain = false;
  latitude: number;
  longitude: number;


  constructor(private trainService: TrainService,
    public datepipe: DatePipe) { }
  trainNo : string;
  date : string;
  newstr : string;
 
  ngOnInit() {
    this.dateCtrl = new FormControl('', [ Validators.required ]);
  }
  stscode(){
    this.getTrain=false;
    this.getTrainStatus=false;
    let latest_date =this.datepipe.transform(this.date, 'yyyyMMdd');
    this.trainService.getLiveTrainStatus(this.trainNo,latest_date)
    .subscribe(data => { 
      this.trains= data ;
      this.latitude =  parseFloat(this.trains.currentCoordinates.lat);
      this.longitude =  parseFloat(this.trains.currentCoordinates.lng); 
      this.getTrain=true;
      this.getTrainStatus=true;
      });
  }

}
