import { Component, computed, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MyLabelComponent } from "./my-label/my-label.component";

@Component({
  selector: 'app-my-form',
  standalone: true,
  imports: [FormsModule, MyLabelComponent],
  template: `
    <app-my-label
      [text]="greetingText()"
    ></app-my-label>
  `
})
export class MyFormComponent {
  inputValue = signal("Hello, world!");
  greetingText = computed(
    () => this.inputValue()
  )
}
