import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { LightingComponent } from './lighting.component';

const routes: Routes = [
  {
    path: '',
    component: LightingComponent,
    data: {
      title: 'Lighting'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LightingRoutingModule {}
