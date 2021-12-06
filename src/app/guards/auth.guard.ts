import { LoginService } from '../services/login.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private login:LoginService, private router: Router){}

canActivate(): boolean | any {
  if(this.login.isLoggedIn()){
    return true
  }
  else{
    this.router.navigate(['/login'])
    return false
  }
}
}
