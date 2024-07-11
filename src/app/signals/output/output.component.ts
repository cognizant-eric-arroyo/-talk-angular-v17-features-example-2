import { Component } from '@angular/core';
import { MyButtonNewComponent } from './my-button-new.component';
import { MyButtonOldComponent } from './my-button-old.component';

@Component({
  standalone: true,
  templateUrl: './output.component.html',
  imports: [MyButtonNewComponent, MyButtonOldComponent],
})
export class OutputPageComponent {
  addTextToParagraph(paragraph: HTMLParagraphElement, addText: string) {
    paragraph.innerHTML += addText + " ";
  }
}
