import { Component } from '@angular/core';

import { input, output } from '@angular/core';

@Component({
  selector: 'app-my-button-new',
  standalone: true,
  template: `
    <button (click)="myButtonClick.emit(name())">
      Write {{ name() }}
    </button>
  `,
})
export class MyButtonNewComponent {
  name = input("");
  myButtonClick = output<string>();
}



