import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }
  loggedInUserName: any;
  ngOnInit(): void {
    this.loggedInUserName =  localStorage.getItem('loggedIn_UserName');
  }

}
