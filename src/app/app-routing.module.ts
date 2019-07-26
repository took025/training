import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { ApicallComponent } from './apicall/apicall.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
