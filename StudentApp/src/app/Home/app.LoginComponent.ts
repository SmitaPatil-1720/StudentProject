import { Component } from '@angular/core';
import{User} from './app.LoginModel'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
 
  templateUrl: './app.LoginPage.html',
 
})
export class LoginComponent {
    //userObj:User = new User();
    constructor(public http:HttpClient, 
      public userObj:User,
      public routing:Router){

    }
    Login(){
      this.http.post("https://localhost:44310/api/Security",
      this.userObj).subscribe(res=>this.Success(res),
      res=>this.Error(res));
    }
    Success(res){
        this.userObj.token = res.token;
        this.routing.navigate(["Home"])    }
    Error(res){

    }
    
}
