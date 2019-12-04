import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { ApicallComponent } from './apicall/apicall.component';
import { DetailComponent } from './products/detail/detail.component';
import { HomeComponent } from './products/home/home.component';
import { CarouselComponent } from './carousel/carousel.component';

const routes: Routes = [
  {
    path: 'homie',
    loadChildren: () => import('./modules/homie/homie.module').then(mod => mod.HomieModule)
  },
  {
    path: 'author',
    loadChildren: () => import('./modules/author/author.module').then(mod => mod.AUTHORModule)
  },
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
    path: 'carousel',
    component: CarouselComponent
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
