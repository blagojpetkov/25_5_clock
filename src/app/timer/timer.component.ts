import { Component, OnInit, inject } from '@angular/core';
import { TimerService } from '../timer-service/timer-service';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent implements OnInit {

  minutes: string = "";
  seconds: string = "";

  service = inject(TimerService)

  ngOnInit(): void {
    this.service.timeInSeconds$.subscribe(time => {
      this.minutes = this.service.getCurrentMinutes().toString().padStart(2, '0');
      this.seconds = this.service.getCurrentSeconds().toString().padStart(2, '0');
    })
  }


}
