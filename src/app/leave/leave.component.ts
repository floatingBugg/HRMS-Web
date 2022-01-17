import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LeaveformComponent } from '../leaveform/leaveform.component';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.scss']
})
export class LeaveComponent implements OnInit {
  ID!: any;
  Name!: string;
  Designation!: string;
  Sick!: number;
  Casual!: number;
  Annual!:number;
  Total!:number;
  Action!:any;
  dialog!:any;




  displayedColumns: string[] = ['ID','Name','Designation','Sick','Casual','Annual','Total','Actions'];
  constructor() { }

  ngOnInit(): void {
  }
onCreate(){
  const dialogconfig = new MatDialogConfig();
  dialogconfig.disableClose = true;
  dialogconfig.autoFocus=true;
  dialogconfig.width='60%'
  this.dialog.open(LeaveformComponent,dialogconfig)

}
}
