import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface User {
  id: string,
  name: string,
  isAdmin: boolean,
}

@Component({
  standalone: true,
  templateUrl: './at-for.component.html',
  imports: [CommonModule],
})
export class AtForPageComponent {
  users: User[] =
  [
    {
      id: '1',
      name: 'Jim Halpert',
      isAdmin: false,
    },
    {
      id: '2',
      name: 'Michael Scott',
      isAdmin: true,
    },
    {
      id: '3',
      name: 'Pam Beasley',
      isAdmin: false,
    },
  ]
}
