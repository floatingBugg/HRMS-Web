import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  constructor(public loginservice:LoginService) { }

  ngOnInit(): void {
    localStorage.setItem('name', 'Bob')
    console.log(localStorage.getItem('name'))
    document.cookie='name=Kyle; expires=' + new Date(2022, 1, 12 ).toUTCString();
  }
  rememberMe(){
    var email= document.getElementById('email');
  }
// loginUser(){
//   console.warn(this.loginForm.value)
// }
// get user(){
// return this.loginForm.get('user')
// }
// get password(){
// return this.loginForm.get('password')
// }

}
