import { Component } from '@angular/core';

import { Input } from '@angular/core';

@Component({
  selector: 'app-my-label-old',
  standalone: true,
  template: `
    <style>
      label {
        border: 1px dashed black;
        padding: 6px;
      }
    </style>
    <label>{{ text }}</label>
  `,
})
export class MyLabelOldComponent {
  @Input() text: string = "Default text";
}


