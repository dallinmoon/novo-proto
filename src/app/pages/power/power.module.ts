import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { PowerComponent } from './power.component';
import { PowerRoutingModule } from './power-routing.module';
import { GSheetService } from '../../services/gsheet.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';  

@NgModule({
  imports: [
    PowerRoutingModule,
    BsDropdownModule,
    ModalModule,
    HttpClientModule,
    ChartsModule,
    CommonModule
  ],
  declarations: [ PowerComponent ],
  providers: [ GSheetService ]
})
export class PowerModule { }
