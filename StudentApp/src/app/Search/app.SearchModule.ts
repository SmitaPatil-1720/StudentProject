import { NgModule } from '@angular/core';
import{FormsModule, ReactiveFormsModule, } from '@angular/forms';
import{RouterModule}from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StudentSearch } from './app.SearchComponent';
import { SearchRoutes } from './app.SearchRouting';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
  
    StudentSearch
    
  ],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,
    RouterModule.forChild(SearchRoutes),
    HttpClientModule
    ],
  providers: [],
  bootstrap: [StudentSearch]
})
export class SearchModule { }
