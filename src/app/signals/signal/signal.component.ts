import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GetTimeOldComponent } from './get-time-old';
import { GetTimeNewComponent } from './get-time-new';
import { GetTimeOldObservableComponent } from './get-time-old-observable';
import { MockDateService } from './mock-date.service';

@Component({
  standalone: true,
  templateUrl: './signal.component.html',
  imports: [GetTimeOldComponent, GetTimeOldObservableComponent, GetTimeNewComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MockDateService],
})
export class SignalPageComponent {

}
