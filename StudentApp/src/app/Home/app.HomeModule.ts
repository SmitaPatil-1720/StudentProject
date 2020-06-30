import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule, } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './app.HomeComponent';
import { MasterComponent } from './app.MasterComponent';
import { MaintRoutes } from './app.MainRouting';


@NgModule({
  declarations: [
  
    HomeComponent,
    
    MasterComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,
    RouterModule.forRoot(MaintRoutes),
    HttpClientModule
    ],
  providers: [],
  bootstrap: [MasterComponent]
})
export class HomeModule { }
