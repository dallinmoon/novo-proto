import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { LightingComponent } from './lighting.component';
import { LightingRoutingModule } from './lighting-routing.module';
import { GSheetService } from '../../services/gsheet.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';  

@NgModule({
  imports: [
    LightingRoutingModule,
    BsDropdownModule,
    ModalModule,
    HttpClientModule,
    ChartsModule,
    CommonModule
  ],
  declarations: [ LightingComponent ],
  providers: [ GSheetService ]
})
export class LightingModule { }
