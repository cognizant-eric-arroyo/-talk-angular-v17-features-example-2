import { Routes } from '@angular/router';
import { AtIfPageComponent } from './template-control-flow/at-if/at-if.component';
import { AtForPageComponent } from './template-control-flow/at-for/at-for.component';
import { OutputPageComponent } from './signals/output/output.component';
import { InputPageComponent } from './signals/input/input.component';
import { ComputedPageComponent } from './signals/computed/computed.component';
import { SignalPageComponent } from './signals/signal/signal.component';

export const routes: Routes = [
  {
    path: 'template-control-flow/at-if',
    component: AtIfPageComponent,
  },
  {
    path: 'template-control-flow/at-for',
    component: AtForPageComponent,
  },
  {
    path: 'signals/signal',
    component: SignalPageComponent,
  },
  {
    path: 'signals/input',
    component: InputPageComponent,
  },
  {
    path: 'signals/computed',
    component: ComputedPageComponent,
  },
  {
    path: 'signals/output',
    component: OutputPageComponent,
  },
];
