import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  constructor(public loginservice:LoginService) { }

  ngOnInit(): void {

  }
  rememberMe(){
    var email= document.getElementById('email');
  }


}
