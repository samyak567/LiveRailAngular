import { Component, OnInit, ModuleWithComponentFactories } from '@angular/core';
import { TrainService } from 'src/app/services/train.service';
import { FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-rescheduled-train',
  templateUrl: './rescheduled-train.component.html',
  styleUrls: ['./rescheduled-train.component.css']
  
})

export class RescheduledTrainComponent implements OnInit {
  trains: any;
  dateCtrl: FormControl;
  constructor(private trainService: TrainService,
              public datepipe: DatePipe) { }
  date: string;
  maxDate = new Date();
  getRescheduledTrain: boolean = false;
  getReschedule: boolean = true;  

  ngOnInit() {
    this.dateCtrl = new FormControl('', [ Validators.required ]);
  }

  stscode(){
    this.getReschedule = false;
    this.getRescheduledTrain = false;
    var latest_date =this.datepipe.transform(this.date, 'yyyyMMdd');
    this.trainService.getRescheduledTrain(latest_date)
    .subscribe(data=>{
      this.trains=data;
      this.getReschedule = true;
      this.getRescheduledTrain = true;
    });
  }

}
