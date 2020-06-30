import { NgModule } from '@angular/core';
import{FormsModule, ReactiveFormsModule, } from '@angular/forms';
import{RouterModule}from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StudentComponent } from './app.StudentComponent';
import { StudentRoutes } from './app.StudentRouting';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    StudentComponent,
    
  ],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,
    RouterModule.forChild(StudentRoutes),
    HttpClientModule
    ],
  providers: [],
  bootstrap: [StudentComponent]
})
export class StudentModule { }
