import { ChangeDetectionStrategy, ChangeDetectorRef, Component, computed, NgZone, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, map, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MyLabelComponent } from './my-label/my-label.component';
import { MyButtonComponent } from './my-button/my-button.component';

interface User {

}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyLabelComponent, MyButtonComponent, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent2 {
  usersService = {
    getAllUsers() {
      return of([] as User[])
    }
  }

  // como string normal
  // labelText = "Texto inicial";

  // como signal
  // labelText = signal("Texto inicial");

  // como observable
  _labelText = new BehaviorSubject<string>("Texto inicial");
  labelText$ = this._labelText.asObservable();
  onSaveChangesClick() {}
  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  condition = false;

  nameList = ["Homero", "Leonel", "Carlos"];

  changeLabelText() {
    // this.labelText = "Modificando texto...";
    // this.labelText.set("Modificando texto...");
    this._labelText.next("Modificando texto...");

    setTimeout(() => {
      // this.labelText = "Texto modificado";
      // this.changeDetectorRef.detectChanges();
      // this.labelText.set("Texto modificado");
      this._labelText.next("Texto modificado");
    }, 1000);
  }


  users = signal<User[]>([]);

  refreshUserTable() {
    this.usersService.getAllUsers()
      .subscribe((users) => {
        // this is runs outside ng zone
        this.users.set(users);
      });
  }

  // computedValue = computed(() => this.labelText().toUpperCase());

  // computedValue(): string {
  //   return this.labelText.toUpperCase();
  // }

  computedValue$ = this.labelText$.pipe(map(labelText => labelText.toUpperCase()));
}
