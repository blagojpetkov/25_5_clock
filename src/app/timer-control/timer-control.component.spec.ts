import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerControlComponent } from './timer-control.component';

describe('TimerControlComponent', () => {
  let component: TimerControlComponent;
  let fixture: ComponentFixture<TimerControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimerControlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimerControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
