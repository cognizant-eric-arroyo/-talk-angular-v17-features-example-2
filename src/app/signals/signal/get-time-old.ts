import { ChangeDetectionStrategy, ChangeDetectorRef, Component, signal } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-get-time-old',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button (click)="refreshTime()">Refresh time</button>

    <p>Current time is: {{ displayedTimeOld }}</p>
  `
})
export class GetTimeOldComponent {
  displayedTimeOld: string = "";

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  refreshTime() {
    this.getTimeFromBackend()
      .subscribe((time) => {
        console.log("Received time:", time);

        const timeAsText = this.formatTime(time);
        this.displayedTimeOld = timeAsText

        /* try removing this line */
        this.changeDetectorRef.detectChanges();
      })
  }

  getTimeFromBackend(): Observable<Date> {
    // This represents asking the backend for the current date, with a 1 second delay
    return of(new Date()).pipe(delay(1000));
  }

  formatTime(time: Date): string {
    return `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
  }
}
