import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomieRoutingModule } from './homie-routing.module';
import { HomieComponent } from './homie/homie.component';

@NgModule({
  declarations: [HomieComponent],
  imports: [
    CommonModule,
    HomieRoutingModule
  ]
})
export class HomieModule { }
