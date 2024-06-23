import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BreakIncrementorComponent } from "./break-incrementor/break-incrementor.component";
import { SessionIncrementorComponent } from "./session-incrementor/session-incrementor.component";
import { TimerComponent } from "./timer/timer.component";
import { TimerControlComponent } from "./timer-control/timer-control.component";
import { TimerService } from './timer-service/timer-service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, BreakIncrementorComponent, SessionIncrementorComponent, TimerComponent, TimerControlComponent]
})
export class AppComponent {
  title = '25-5-clock';
}
