import { Component, OnInit } from '@angular/core';
import { Train } from 'src/app/models/Train';
import { TrainService } from 'src/app/services/train.service';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.css']
})
export class TrainComponent implements OnInit {
  trains:any;
  constructor(private trainService: TrainService) { }

  ngOnInit() {
    console.log("OnInitCalled");
    this.trainService.getTrains()
    .subscribe(trains => { 
      this.trains= trains; 
      });
  }
}
 