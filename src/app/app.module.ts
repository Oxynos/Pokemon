import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MyFilterPipe } from './my-filter.pipe';
import { AppRoutingModule } from './app-routing.module';
import { AngularMaterialModule } from './angular-material.module';
import { AboutComponent } from './about/about.component';
import { DetailComponent } from './detail/detail.component';
import { NavComponent } from './nav.component';
import { MyServiceService } from './my-service.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyFilterPipe,
    AboutComponent,
    DetailComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    AngularMaterialModule,
  ],
  providers: [MyServiceService, { provide: LOCALE_ID, useValue: 'fr' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
