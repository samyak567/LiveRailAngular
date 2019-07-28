import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainBwStationComponent } from './train-bw-station.component';

describe('TrainBwStationComponent', () => {
  let component: TrainBwStationComponent;
  let fixture: ComponentFixture<TrainBwStationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainBwStationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainBwStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
