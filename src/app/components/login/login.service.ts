import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { Router } from '@angular/router';
import { LoginValidationComponent } from './login-validation/login-validation/login-validation.component';
import { MatDialog } from '@angular/material/dialog';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required
    ]),
  });

  constructor(
    private loginService: LoginServiceService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  loginUser() {
    if (this.loginForm.valid) {
      let data = this.loginForm.value;
      this.loginService.login(data).subscribe((result) => {
        if (result.success) {
          localStorage.setItem('token', result.data.token);
          this.router.navigate(['/home']);
        } else {
          this.dialog.open(LoginValidationComponent);
        }
      });
    }
  }

  get user() {
    return this.loginForm.get('username');
  }
  get password() {
    return this.loginForm.get('password');
  }

  isLoggedIn(){
   return localStorage.getItem('token')
  }
}
