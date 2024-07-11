import { Component } from '@angular/core';
import { MyLabelOldComponent } from './my-label-old.component';
import { MyLabelNewComponent } from './my-label-new.component';

@Component({
  standalone: true,
  templateUrl: './input.component.html',
  imports: [MyLabelOldComponent, MyLabelNewComponent],
})
export class InputPageComponent {
}
