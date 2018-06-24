import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { SustainabilityComponent } from './sustainability.component';

const routes: Routes = [
  {
    path: '',
    component: SustainabilityComponent,
    data: {
      title: 'Sustainability'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SustainabilityRoutingModule {}
