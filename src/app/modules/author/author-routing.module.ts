import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {
    path: 'news/:id',
    component: NewsComponent
  },
  {
    path: 'detail/:id',
    component: DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AUTHORRoutingModule { }
