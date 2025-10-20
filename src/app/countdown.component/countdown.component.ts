import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownSeparateComponent implements OnInit, OnDestroy {
  targetDate: Date = new Date('2025-11-06T00:00:00');
  remainingTime: number = 0; // em segundos
  timerSubscription!: Subscription;

  ngOnInit() {
    this.updateRemainingTime();
    this.startCountdown();
  }

  startCountdown() {
    this.timerSubscription = interval(1000).subscribe(() => {
      this.updateRemainingTime();
    });
  }

  stopCountdown() {
    if (this.timerSubscription) this.timerSubscription.unsubscribe();
  }

  updateRemainingTime() {
    const now = new Date().getTime();
    const distance = this.targetDate.getTime() - now;
    this.remainingTime = Math.max(Math.floor(distance / 1000), 0);
  }

  ngOnDestroy() {
    this.stopCountdown();
  }

  // Retorna cada parte separadamente
  get days(): number {
    return Math.floor(this.remainingTime / 86400);
  }

  get hours(): number {
    return Math.floor((this.remainingTime % 86400) / 3600);
  }

  get minutes(): number {
    return Math.floor((this.remainingTime % 3600) / 60);
  }

  get seconds(): number {
    return this.remainingTime % 60;
  }

  // Formatação opcional para sempre ter 2 dígitos
  pad(n: number): string {
    return n.toString().padStart(2, '0');
  }
}
