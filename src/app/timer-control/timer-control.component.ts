import { Component, inject } from '@angular/core';
import { TimerService } from '../timer-service/timer-service';

@Component({
  selector: 'app-timer-control',
  standalone: true,
  imports: [],
  templateUrl: './timer-control.component.html',
  styleUrl: './timer-control.component.css'
})
export class TimerControlComponent {

  service = inject(TimerService)

  toggleTimer() {
    this.service.toggleTimer()
  }
  resetTimer(){
    this.service.resetTimer()
  }

}
