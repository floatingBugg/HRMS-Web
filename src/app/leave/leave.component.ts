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
  Sick!: any;
  Casual!: any;
  Annual!:any;
  Total!:string;
  Action!:any;
  dummydata:any=[];

  displayedColumns: string[] = ['ID','Name','Designation','Sick','Casual','Annual','Total','Action'];
  // dataSource :any;

constructor(public dialog: MatDialog)
{
  this.dummydata = [
    {ID: 1, Name: 'Hamza Ashiq', Designation: 'Internee', Sick: '2',Casual:'3',Annual:'18',Total:'5',Action:''},
    {ID: 2, Name: 'Nidal Pervaiz', Designation: 'Internee', Sick: '7',Casual:'3',Annual:'18',Total:'10',Action:''},
    {ID: 3, Name: 'Zohaib Ahmad', Designation: 'Internee', Sick: '1',Casual:'5',Annual:'18',Total:'6',Action:''},
    {ID: 4, Name: 'Husnain Zafar', Designation: 'Internee', Sick: '9',Casual:'6',Annual:'18',Total:'15',Action:''},
    {ID: 5, Name: 'Naveed Ali', Designation: 'Internee', Sick: '2',Casual:'3',Annual:'18',Total:'5',Action:''},
    // {ID: 6, Name: 'Hydrogen', Designation: 1.0079, Sick: '2',Casual:'3',Annual:'4',Total:'15',Action:''},
    // {ID: 7, Name: 'Hydrogen', Designation: 1.0079, Sick: '2',Casual:'3',Annual:'4',Total:'15',Action:''},
  ];
}
  ngOnInit(): void {
    // debugger
this.dummydata = this.dummydata;
  }
  openDilog(){
    
 this.dialog.open(LeaveformComponent)
  }

}
