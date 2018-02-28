import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MyFilterPipe } from './my-filter.pipe';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { DetailComponent } from './detail/detail.component';
import { MyServiceService } from './my-service.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyFilterPipe,
    AboutComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
