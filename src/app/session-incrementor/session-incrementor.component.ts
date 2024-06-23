import { Component, inject } from '@angular/core';
import { TimerService } from '../timer-service/timer-service';

@Component({
  selector: 'app-session-incrementor',
  standalone: true,
  imports: [],
  templateUrl: './session-incrementor.component.html',
  styleUrl: './session-incrementor.component.css'
})
export class SessionIncrementorComponent {
  service = inject(TimerService)
  value: number = this.service.getSessionMinutes();
  decrementSession() {
    this.service.decrementSession()
    this.value = this.service.getSessionMinutes()
  }
  incrementSession() {
    this.service.incrementSession()
    this.value = this.service.getSessionMinutes()
  }


}
