import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-viewleave',
  templateUrl: './viewleave.component.html',
  styleUrls: ['./viewleave.component.scss']
})
export class ViewleaveComponent implements OnInit {
 
  leaveempname!: string;
  empDesignation!:string;
  leavetype1!: any;
  leavedate1!: any;
  leavedays1!:any;
  takenleaves!:any;
  displayedColumns2:string[]=[
    'Leave Type',
    'Leave Date',
    'Leave Days',
    'Remarks',
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
