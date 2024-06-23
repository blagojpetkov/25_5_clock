import { Component, OnInit, inject } from '@angular/core';
import { TimerService } from '../timer-service/timer-service';

@Component({
  selector: 'app-break-incrementor',
  standalone: true,
  imports: [],
  templateUrl: './break-incrementor.component.html',
  styleUrl: './break-incrementor.component.css'
})
export class BreakIncrementorComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  service = inject(TimerService)
  value: number = this.service.getBreakMinutes();
  decrementBreak() {
    this.service.decrementBreak()
    this.value = this.service.getBreakMinutes()
  }
  incrementBreak() {
    this.service.incrementBreak()
    this.value = this.service.getBreakMinutes()
  }
}
