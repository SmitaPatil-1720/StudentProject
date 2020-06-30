import { Component } from '@angular/core';
import{ HttpClient } from '@angular/common/http'
import { StudentModel } from './app.StudentModel';

@Component({
  selector:'app-root',
  templateUrl: './app.StudentView.html',
 
})
export class StudentComponent {

  StudObj=new StudentModel();
 StudentObjs:Array<StudentModel> = new Array<StudentModel>();
 
  constructor(public httpobj:HttpClient){
    
  }

submit(){
  var studDto:any={};
  studDto.Id=this.StudObj.Id;
  studDto.Name=this.StudObj.Name;
  studDto.Address=this.StudObj.Address;
  this.httpobj.post("https://localhost:44310/api/Studentapi"
  ,studDto)
  .subscribe(res=>this.Success(res),
  res=>this.Error(res));


  //alert(this.StudObj.Id + " " + this.StudObj.Name);
}
Success(res){
 this.StudentObjs=res;//set the collection
  this.StudObj=new StudentModel();//clear object
}
Error(res){
  alert(res);
}
}

 /* Add(){
    this.StudCollection.push(this.StudObj);
    this.StudObj=new StudentModel();
  }
   select(SelectedObject:StudentModel){
    //this.StudObj=SelectedObject;
   this.StudObj=Object.assign({},SelectedObject)
   }
  
 }*/
    
  

