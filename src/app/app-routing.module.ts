import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { ApicallComponent } from './apicall/apicall.component';
import { DetailComponent } from './products/detail/detail.component';
import { HomeComponent } from './products/home/home.component';

const routes: Routes = [
  {
    path: 'template',
    component: TemplateFormsComponent
  },
  {
    path: 'react',
    component: ReactiveFormsComponent
  },
  {
    path: 'dyn',
    component: DynamicComponent
  },
  {
    path: 'call',
    component: ApicallComponent
  },
  {
    path : 'home',
    component: HomeComponent
  },
  {
    path: 'detail/:id',
    component: DetailComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
