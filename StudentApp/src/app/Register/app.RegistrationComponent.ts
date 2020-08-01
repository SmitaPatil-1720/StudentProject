import { Component } from '@angular/core';
import{ HttpClient } from '@angular/common/http'
import { Registration } from './app.RegistrationModel';
import { Router } from '@angular/router';


@Component({
  selector:'app-root',
  templateUrl: './app.Registration.html',
 
})
export class RegistrationComponent {

  regObj=new Registration(); 
  constructor(public httpobj:HttpClient,
    public routing:Router){
    
  }
 
SignIn(){
  var regDto:any={};
  regDto.FirstName=this.regObj.FirstName;
  regDto.lastName=this.regObj.LastName;
  regDto.Email=this.regObj.Email;
  regDto.Username=this.regObj.userName;
  regDto.Password=this.regObj.password;
  this.httpobj.post("https://localhost:44310/api/Register"
  ,regDto)
  .subscribe(res=>this.Success(res),
  res=>this.Error(res));


}
Success(res){
  //this.regObj=new Registration();
  this.routing.navigate(["Login"])
}
Error(res){
  alert(res);
}
}


    
  

