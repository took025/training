import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { ApicallComponent } from './apicall/apicall.component';
import { HttpClientModule} from '@angular/common/http';
import { DetailComponent } from './products/detail/detail.component';
import { HomeComponent } from './products/home/home.component';
import { StarPmComponent } from './products/home/star-pm/star-pm.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormsComponent,
    TemplateFormsComponent,
    DynamicComponent,
    ApicallComponent,
    HomeComponent,
    StarPmComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
