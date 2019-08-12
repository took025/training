import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomieComponent } from './homie/homie.component';

const routes: Routes = [
  {
    path: '',
    component: HomieComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomieRoutingModule { }
