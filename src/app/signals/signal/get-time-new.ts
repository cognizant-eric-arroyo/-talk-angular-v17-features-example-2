import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { MockDateService } from './mock-date.service';

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

  mockDateService = inject(MockDateService);

  refreshTime() {
    this.mockDateService.getTimeFromBackend()
      .subscribe((time) => {
        console.log("Received time:", time);
        this.displayedTimeNew.set(time)
      })
  }
}
