import { NgModule } from '@angular/core';
import { SignupComponent } from './signup.component';
import { SignupRoutingModule } from './signup-routing.module';

@NgModule({
  imports: [
    SignupRoutingModule
  ],
  declarations: [ SignupComponent ]
})
export class SignupModule { }
