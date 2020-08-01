import { NgModule } from '@angular/core';
import{FormsModule, ReactiveFormsModule, } from '@angular/forms';
import{RouterModule}from '@angular/router';
import { HttpClientModule, } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RegisterRoutes } from './app.RegisterRouting';
import { RegistrationComponent} from './app.RegistrationComponent';


@NgModule({
  declarations: [
  RegistrationComponent,  
  ],
  
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,
    RouterModule.forChild(RegisterRoutes),
    HttpClientModule
    ],
  providers: [],
  bootstrap: [RegistrationComponent]
})
export class RegisterModule { }
