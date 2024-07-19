import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { MockDateService } from './mock-date.service';

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

  changeDetectorRef = inject(ChangeDetectorRef);
  mockDateService = inject(MockDateService);

  refreshTime() {
    this.mockDateService.getTimeFromBackend()
      .subscribe((time) => {
        console.log("Received time:", time);
        this.displayedTimeOld = time;

        /* try removing this line */
        this.changeDetectorRef.detectChanges();
      });
  }
}
