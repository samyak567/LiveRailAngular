import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RescheduledTrainComponent } from './rescheduled-train.component';

describe('RescheduledTrainComponent', () => {
  let component: RescheduledTrainComponent;
  let fixture: ComponentFixture<RescheduledTrainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RescheduledTrainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RescheduledTrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
