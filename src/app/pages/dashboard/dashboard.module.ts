import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { GSheetService } from '../../services/gsheet.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';  

@NgModule({
  imports: [
    DashboardRoutingModule,
    BsDropdownModule,
    ModalModule,
    HttpClientModule,
    ChartsModule,
    CommonModule
  ],
  declarations: [ DashboardComponent ],
  providers: [ GSheetService ]
})
export class DashboardModule { }
