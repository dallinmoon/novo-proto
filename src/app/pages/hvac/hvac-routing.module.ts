import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { HvacComponent } from './hvac.component';

const routes: Routes = [
  {
    path: '',
    component: HvacComponent,
    data: {
      title: 'HVAC'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HvacRoutingModule {}
