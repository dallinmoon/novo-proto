import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { GasComponent } from './gas.component';
import { GasRoutingModule } from './gas-routing.module';
import { GSheetService } from '../../services/gsheet.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';  

@NgModule({
  imports: [
    GasRoutingModule,
    BsDropdownModule,
    ModalModule,
    HttpClientModule,
    ChartsModule,
    CommonModule
  ],
  declarations: [ GasComponent ],
  providers: [ GSheetService ]
})
export class GasModule { }
