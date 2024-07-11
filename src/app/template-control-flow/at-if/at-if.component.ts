import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface User {
  id: string,
  name: string,
  isAdmin: boolean,
}

@Component({
  standalone: true,
  templateUrl: './at-if.component.html',
  imports: [CommonModule],
})
export class AtIfPageComponent {
  user: User = {
    id: '1',
    name: 'Michael Scott',
    isAdmin: true,
  }
}
