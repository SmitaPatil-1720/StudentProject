import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule, } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './app.HomeComponent';
import { MasterComponent } from './app.MasterComponent';
import { MaintRoutes } from './app.MainRouting';
import { LoginComponent } from './app.LoginComponent';
import { User } from './app.LoginModel';
import { SecurityLogic } from '../Utilities/Utilities.AuthGuard';
import { MyJwtInterceptor } from '../Utilities/Utilities.Interceptor';


@NgModule({
  declarations: [
  
    HomeComponent,
    LoginComponent,
    MasterComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,
    RouterModule.forRoot(MaintRoutes),
    HttpClientModule
    ],
  providers: [User,SecurityLogic,
    {provide:HTTP_INTERCEPTORS,useClass: MyJwtInterceptor,multi:true}],
  bootstrap: [MasterComponent]
})
export class HomeModule { }
