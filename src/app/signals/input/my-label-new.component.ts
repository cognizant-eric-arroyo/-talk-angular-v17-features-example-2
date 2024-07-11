import { Component } from '@angular/core';

import { input } from '@angular/core';

@Component({
  selector: 'app-my-label-new',
  standalone: true,
  template: `
    <style>
      label {
        border: 1px dashed black;
        padding: 6px;
      }
    </style>
    <label>{{ text() }}</label>
  `,
})
export class MyLabelNewComponent {
  text = input("Default text");
}



