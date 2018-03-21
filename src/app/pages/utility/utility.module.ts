import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { UtilityComponent } from './utility.component';
import { UtilityRoutingModule } from './utility-routing.module';
import { GSheetService } from '../../services/gsheet.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';  

@NgModule({
  imports: [
    UtilityRoutingModule,
    BsDropdownModule,
    ModalModule,
    HttpClientModule,
    ChartsModule,
    CommonModule
  ],
  declarations: [ UtilityComponent ],
  providers: [ GSheetService ]
})
export class UtilityModule { }
