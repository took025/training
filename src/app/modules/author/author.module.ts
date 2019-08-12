import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AUTHORRoutingModule } from './author-routing.module';
import { NewsComponent } from './news/news.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [ NewsComponent, DetailComponent],
  imports: [
    CommonModule,
    AUTHORRoutingModule
  ]
})
export class AUTHORModule { }
