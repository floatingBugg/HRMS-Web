import { Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/services/spinner.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  loading$ = this.loader.loading$;
  constructor(public loginservice:LoginService, private loader: SpinnerService) { }

  ngOnInit(): void {

  }
  rememberMe(){
    var email= document.getElementById('email');
  }


}
