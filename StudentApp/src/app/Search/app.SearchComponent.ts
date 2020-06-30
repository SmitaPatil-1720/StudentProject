import { Component } from '@angular/core';
import { StudentModel } from '../Student/app.StudentModel';
import { HttpClient } from '@angular/common/http';

@Component({
  selector:'app-root',
  templateUrl: './app.SearchView.html',
 
})
export class StudentSearch {
  studentName:string="";
  studentModels:Array<StudentModel>=new Array<StudentModel>();
 constructor(public http:HttpClient){
    
 }
  search(){
    this.http.get("https://localhost:44310/api/Studentapi?studentName=" +this.studentName)
    .subscribe(res=>this.success(res), res=>this.error(res));
  }

  success(res){
      this.studentModels=res;
  }
  error(res){

  }
  
  
}
    
  

