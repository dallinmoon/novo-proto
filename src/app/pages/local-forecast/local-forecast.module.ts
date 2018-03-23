import { NgModule } from '@angular/core';
import { LocalForecastComponent } from './local-forecast.component';
import { LocalForecastRoutingModule } from './local-forecast-routing.module';

@NgModule({
  imports: [
    LocalForecastRoutingModule
  ],
  declarations: [ LocalForecastComponent ]
})
export class LocalForecastModule { }
