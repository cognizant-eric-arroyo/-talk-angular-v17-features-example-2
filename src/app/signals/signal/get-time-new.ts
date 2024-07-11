import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-get-time-new',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button (click)="refreshTime()">Refresh time</button>

    <p>Current time is: {{ displayedTimeNew() }}</p>
  `
})
export class GetTimeNewComponent {
  displayedTimeNew = signal<string>("");

  refreshTime() {
    this.getTimeFromBackend()
      .subscribe((time) => {
        console.log("Received time:", time);

        const timeAsText = this.formatTime(time);
        this.displayedTimeNew.set(timeAsText)
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
