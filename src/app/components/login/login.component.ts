import { BuiltinType } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { SpinnerService } from 'src/app/services/spinner.service';
import { LoginValidationComponent } from './login-validation/login-validation/login-validation.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide = true;
  loading$ = this.loader.loading$;
  rememberMe: boolean = false;
  userId: any;
  userName: any;
  userPw: any;
  input: any;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  constructor(
    private router: Router,
    public dialog: MatDialog,
    private loginService: LoginServiceService,
    private loader: SpinnerService
  ) {}

  loginUser() {
    debugger
    if (this.loginForm.valid) {
      let data = this.loginForm.value;
      this.loginService.login(data).subscribe((result) => {
        if (result?.success) {
          localStorage.setItem('token', result.data.token);
          localStorage.setItem('loggedIn_UserId', result.data.userId);
          localStorage.setItem('loggedIn_UserName', result.data.userName);
          localStorage.setItem('loggedIn_RoleId', result.data.roleId);
          localStorage.setItem('loggedIn_empid',result.data.empid)

          console.log(result);
          // this.remember();
          this.router.navigate(['/home']);
        } else {
          this.dialog.open(LoginValidationComponent);
        }
      });
    }
  }
  

  remember() {
    this.rememberMe = true;
    if (this.rememberMe) {
      var userEmail = (<HTMLInputElement>document.getElementById('email'))
        .value;
      var userPassword = (<HTMLInputElement>document.getElementById('password'))
        .value;
      localStorage.setItem('userId', userEmail);
      localStorage.setItem('userPw', userPassword);
      console.log(userEmail, userPassword);
    }
  }

  getUserDetails() {
    var email = localStorage.getItem('userId');
    var password = localStorage.getItem('userPw');
    this.loginForm.controls['email'].setValue(email);
    this.loginForm.controls['password'].setValue(password);
  }
  ngOnInit(): void {
    this.getUserDetails();
  }
}
