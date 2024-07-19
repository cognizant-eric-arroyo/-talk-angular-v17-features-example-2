import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MockDateService } from './mock-date.service';

@Component({
  selector: 'app-get-time-old-observable',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button (click)="refreshTime()">Refresh time</button>

    <p>Current time is: {{ displayedTimeNew | async }}</p>
  `
})
export class GetTimeOldObservableComponent {
  displayedTimeNew = new BehaviorSubject<string>('');

  mockDateService = inject(MockDateService);

  refreshTime() {
    this.mockDateService.getTimeFromBackend()
      .subscribe((time) => {
        console.log("Received time:", time);
        this.displayedTimeNew.next(time)
      })
  }
}
