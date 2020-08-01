import { Component } from '@angular/core';
import{User} from './app.LoginModel'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
 // selector: 'app-root',
  templateUrl: './app.LoginPage.html',
 
})
export class LoginComponent {
    //public userObj:User = new User();
    constructor(public httpobj:HttpClient, 
      public userObj:User,
      public routing:Router){

    }
   
    Login(){
      this.httpobj.post("https://localhost:44310/api/Security",
      this.userObj).subscribe(res=>this.Success(res),
      res=>this.Error(res));
    }
    Success(res){
        this.userObj.token = res.token;
        this.routing.navigate(["Home"])
        this.userObj = new User(); 
    }
    Error(res){
      alert(res);
    }
    Register(){
      this.routing.navigate(["Registration/new"])
    }

    
    
}
