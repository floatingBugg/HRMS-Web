import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  centered = false;
  disabled = false;
  unbounded = false;

  radius !: number;
  color !: string;
  constructor(private router:Router, public loginService: LoginService) { }

  ngOnInit(): void {
  }
  logout(){
    this.loginService.logoutUser();
  }
}
