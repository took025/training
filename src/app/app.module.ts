import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import _ from 'lodash';
// import * as _ from 'lodash-es/lodash';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { ApicallComponent } from './apicall/apicall.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './products/detail/detail.component';
import { HomeComponent } from './products/home/home.component';
import { StarPmComponent } from './products/home/star-pm/star-pm.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
// import { SlickCarouselModule } from 'ngx-slick-carousel';
// For MDB Angular Free
// import { CarouselModule , CollapseModule,} from 'angular-bootstrap-md';
// import { CarouselModule } from 'ngx-carousel-lib';
import { OwlModule } from 'ngx-owl-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// For MDB Angular Free
// import { WavesModule } from 'ng-uikit-pro-standard'
import { IgxCarouselModule } from 'igniteui-angular';
import { CarComponent } from './carousel/car/car.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DragScrollModule } from 'ngx-drag-scroll';
import { CarouselModule } from 'ngx-bootstrap';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { Daterangepicker } from 'ng2-daterangepicker';



@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormsComponent,
    TemplateFormsComponent,
    DynamicComponent,
    ApicallComponent,
    HomeComponent,
    StarPmComponent,
    DetailComponent,
    FooterComponent,
    HeaderComponent,
    CarouselComponent,
    CarComponent
  ],
  imports: [
    
    BrowserModule,
    Daterangepicker,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxDaterangepickerMd.forRoot(),
    DragScrollModule,
    // Ng2CarouselamosModule,
    // Ng2CarouselamosModule,
    // SlickCarouselModule
    CarouselModule,
    BrowserAnimationsModule,
    IgxCarouselModule,
    NgbModule  ,
    // CarouselModule.forRoot()
    SwiperModule,
    FlatpickrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
