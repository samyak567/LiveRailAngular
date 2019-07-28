import { Component, OnInit } from '@angular/core';
import { TrainService } from 'src/app/services/train.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-train-route',
  templateUrl: './train-route.component.html',
  styleUrls: ['./train-route.component.css']
})
export class TrainRouteComponent implements OnInit {
  blank: FormControl;
  trains:any;
  getTrainRoute: boolean =true;
  getTrainRouteTable: boolean= false;
  constructor(private trainService: TrainService) { }
  trainNo : string;
  ngOnInit() {
    this.blank = new FormControl('', [ Validators.required ]);
  }
  stscode(){
    this.getTrainRoute = false;
    this.getTrainRouteTable=false;
    this.trainService.getTrainRoute(this.trainNo)
    .subscribe(data => { 
      this.trains= data ; 
      this.getTrainRoute = true;
      this.getTrainRouteTable=true;
      });
     
  }
}