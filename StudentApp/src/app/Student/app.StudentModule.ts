import { NgModule } from '@angular/core';
import{FormsModule, ReactiveFormsModule, } from '@angular/forms';
import{RouterModule}from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StudentComponent } from './app.StudentComponent';
import { StudentRoutes } from './app.StudentRouting';
import { CommonModule } from '@angular/common';
import { MyJwtInterceptor } from '../Utilities/Utilities.Interceptor';

@NgModule({
  declarations: [
    StudentComponent,
    
  ],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,
    RouterModule.forChild(StudentRoutes),
    HttpClientModule
    ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass: MyJwtInterceptor,multi:true}
  ],
  bootstrap: [StudentComponent]
})
export class StudentModule { }
