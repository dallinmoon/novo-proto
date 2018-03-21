import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { GasComponent } from './gas.component';

const routes: Routes = [
  {
    path: '',
    component: GasComponent,
    data: {
      title: 'Gas'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GasRoutingModule {}
