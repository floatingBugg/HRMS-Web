import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LeaveformComponent } from '../leaveform/leaveform.component';


@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.scss']
})
export class LeaveComponent implements OnInit {
  ID!: any;
  Name!: string;
  Designation!:string;
  Sick!: number;
  Casual!: number;
  Annual!:number;
  Total!:number;
  Action!:any;
  




  displayedColumns: string[] = ['ID','Name','Designation','Sick','Casual','Annual','Total','Action'];
  
constructor(public dialog: MatDialog)
{}
  ngOnInit(): void {
 
  }
  openDilog(){
    
 this.dialog.open(LeaveformComponent)
  }

}
