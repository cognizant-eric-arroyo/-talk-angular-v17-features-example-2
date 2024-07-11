import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <h1>New features in Angular V17</h1>

    <nav>
      <a routerLink="/template-control-flow/at-if">&#64;if</a>
      <a routerLink="/template-control-flow/at-for">&#64;for</a>
      <a routerLink="/signals/signal">signal()</a>
      <a routerLink="/signals/input">input()</a>
      <a routerLink="/signals/computed">computed()</a>
      <a routerLink="/signals/output">output()</a>
    </nav>

    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
}
