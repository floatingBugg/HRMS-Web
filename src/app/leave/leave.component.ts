import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.scss']
})
export class LeaveComponent implements OnInit {
  ID!: any;
  Name!: string;
  Sick!: number;
  Casual!: number;
  Annual!:number;
  Total!:number;




  displayedColumns: string[] = ['ID','Name','Sick','Casual','Annual','Total'];
  constructor() { }

  ngOnInit(): void {
  }

}
