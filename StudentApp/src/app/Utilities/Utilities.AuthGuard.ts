import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { User } from '../Home/app.LoginModel';
import { Observable } from 'rxjs';


@Injectable()
export class SecurityLogic implements CanActivate{
    constructor( private _router:Router ,public _user:User){

    }

    canActivate(next:ActivatedRouteSnapshot, state: RouterStateSnapshot)
    :Observable<boolean> | Promise<boolean> | boolean{
    if(this._user.token.length !=0){
        return true;
    }
    this._router.navigate(['/Login']);
    return false;
}
}
