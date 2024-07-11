import { Component,  } from '@angular/core';

import { EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-button-old',
  standalone: true,
  template: `
    <button (click)="myButtonClick.emit(name)">
      Write {{ name }}
    </button>
  `,
})
export class MyButtonOldComponent {
  @Input() name = "";
  @Output() myButtonClick =
      new EventEmitter<string>();
}



