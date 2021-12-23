import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
 
  selector: 'app-assigned-screens',
  templateUrl: './assigned-screens.component.html',
  styleUrls: ['./assigned-screens.component.scss']
})
export class AssignedScreensComponent implements OnInit {

  constructor(
   
  ) { }
   
  selectedId!:number;

  ngOnInit(): void {

  }

}
