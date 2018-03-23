import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { LocalForecastComponent } from './local-forecast.component';

const routes: Routes = [
  {
    path: '',
    component: LocalForecastComponent,
    data: {
      title: 'Local Forecast'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocalForecastRoutingModule {}
