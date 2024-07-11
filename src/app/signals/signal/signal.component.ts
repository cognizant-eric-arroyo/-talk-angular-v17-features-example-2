import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { GetTimeOldComponent } from './get-time-old';
import { GetTimeNewComponent } from './get-time-new';

@Component({
  standalone: true,
  templateUrl: './signal.component.html',
  imports: [GetTimeOldComponent, GetTimeNewComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalPageComponent {
  refreshing = signal(false);

  displayedTimeOld: string = "";
  displayedTimeNew = signal<string>("");

  refreshTime() {
    this.refreshing.set(true);

    this.getTimeFromBackend()
      .subscribe((time) => {
        console.log(time);

        const timeAsText = this.formatTime(time);
        this.displayedTimeOld = timeAsText
        this.displayedTimeNew.set(timeAsText)

        this.refreshing.set(false);
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
