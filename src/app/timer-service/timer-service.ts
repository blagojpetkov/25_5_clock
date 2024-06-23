import { Injectable } from "@angular/core";
import { BehaviorSubject, min } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class TimerService {

    audio = new Audio('BeepSound.wav');

    timerStarted: boolean = false;
    timeSessionStarted: boolean = true;

    maxTimeSessionInSeconds: number = 1500;
    maxTimeBreakInSeconds: number = 300;


    timeSessionInSeconds: number = this.maxTimeSessionInSeconds;
    timeBreakInSeconds: number = this.maxTimeBreakInSeconds;

    timeSubject: BehaviorSubject<number> = new BehaviorSubject(this.timeSessionInSeconds);
    public timeInSeconds$ = this.timeSubject.asObservable();
    private intervalId: NodeJS.Timeout | null = null;

    resetTimer() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }

        this.maxTimeSessionInSeconds = 1500;
        this.maxTimeBreakInSeconds = 300;
        this.timeSessionInSeconds = this.maxTimeSessionInSeconds;
        this.timeBreakInSeconds = this.maxTimeBreakInSeconds;
        this.timerStarted = false;
        this.timeSessionStarted = true;
        this.timeSubject.next(this.timeSessionInSeconds)
    }

    toggleTimer() {
        if (this.timerStarted) {
            this.timerStarted = false;
            if (this.intervalId) {
                clearInterval(this.intervalId);
                this.intervalId = null;
            }
        }
        else {
            this.timerStarted = true;
            if (!this.intervalId) {
                this.intervalId = setInterval(() => {
                    this.decrementOneSecond();
                }, 1000);
            }
        }
    }

    getCurrentMinutes(): number {
        if (this.timeSessionStarted) {
            return Math.floor(this.timeSessionInSeconds / 60)
        }
        else {
            return Math.floor(this.timeBreakInSeconds / 60)
        }
    }

    getCurrentSeconds(): number {
        if (this.timeSessionStarted) {
            return this.timeSessionInSeconds % 60
        }
        else {
            return this.timeBreakInSeconds % 60
        }
    }

    getSessionMinutes() {
        return this.maxTimeSessionInSeconds / 60
    }
    getBreakMinutes() {
        return this.maxTimeBreakInSeconds / 60
    }

    incrementSession() {
        if (this.timerStarted) return
        if (this.getSessionMinutes() >= 60) return

        this.maxTimeSessionInSeconds += 60
        this.timeSessionInSeconds = this.maxTimeSessionInSeconds
        if (this.timeSessionStarted)
            this.timeSubject.next(this.timeSessionInSeconds)
    }

    decrementSession() {
        if (this.timerStarted) return
        if (this.getSessionMinutes() <= 1) return

        this.maxTimeSessionInSeconds -= 60
        this.timeSessionInSeconds = this.maxTimeSessionInSeconds
        if (this.timeSessionStarted)
            this.timeSubject.next(this.timeSessionInSeconds)

    }

    incrementBreak() {
        if (this.timerStarted) return
        if (this.getBreakMinutes() >= 60) return

        this.maxTimeBreakInSeconds += 60
        this.timeBreakInSeconds = this.maxTimeBreakInSeconds
        if (!this.timeSessionStarted)
            this.timeSubject.next(this.timeBreakInSeconds)
    }

    decrementBreak() {
        if (this.timerStarted) return
        if (this.getBreakMinutes() <= 1) return

        this.maxTimeBreakInSeconds -= 60
        this.timeBreakInSeconds = this.maxTimeBreakInSeconds
        if (!this.timeSessionStarted)
            this.timeSubject.next(this.timeBreakInSeconds)

    }

    decrementOneSecond() {
        if (this.timeSessionStarted) {
            if (this.timeSessionInSeconds > 0) {
                this.timeSessionInSeconds--
                this.timeSubject.next(this.timeSessionInSeconds)
                console.log(this.timeSubject.value)
            }
            else {
                this.audio.play();
                this.timeSessionStarted = false;
                this.timeBreakInSeconds = this.maxTimeBreakInSeconds;
                this.timeSubject.next(this.timeBreakInSeconds)
                console.log(this.timeSubject.value)
            }
        }
        else {
            if (this.timeBreakInSeconds > 0) {
                this.timeBreakInSeconds--
                this.timeSubject.next(this.timeBreakInSeconds)
                console.log(this.timeSubject.value)
            }
            else {
                this.audio.play();
                this.timeSessionStarted = true;
                this.timeSessionInSeconds = this.maxTimeSessionInSeconds;
                this.timeSubject.next(this.timeSessionInSeconds)
                console.log(this.timeSubject.value)
            }
        }
    }

}