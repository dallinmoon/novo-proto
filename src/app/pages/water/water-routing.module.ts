import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { WaterComponent } from './water.component';

const routes: Routes = [
  {
    path: '',
    component: WaterComponent,
    data: {
      title: 'Water'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WaterRoutingModule {}
