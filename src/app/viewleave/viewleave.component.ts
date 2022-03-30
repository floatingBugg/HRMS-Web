import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { LeaveService } from '../services/leave.service';
import { employeeGrid } from '../_interfaces/employeeGrid';
import { viewleaveGrid } from '../_interfaces/leave';

@Component({
  selector: 'app-viewleave',
  templateUrl: './viewleave.component.html',
  styleUrls: ['./viewleave.component.scss']
})
export class ViewleaveComponent implements OnInit {
 
 public leaveempname!: string;
  // userdata:
  // empDesignation!:string;
 public leaveempid!: any;
  displayedColumns2:string[]=[
    'Leave Type',
    'Leave Date',
    'Leave Days',
    'Remarks' 
  ];
  leavetype: any;
  id: any;
  // route: any;
  rowId: any;
  leavestartdate: any;
  leaveenddate: any;
  leavedays: any;
  value: any;
  leavetableData:any; 
  constructor(public leaveservice:LeaveService , public route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.rowId = this.route.snapshot.paramMap.get('id');
    this.viewdataleave(this.leaveservice.recordId);
  }
  
viewdataleave(id:any){
  this.leaveservice.viewempoyeeleavedata(id).subscribe((data: any) => {  
    
    if (data.success) {
      let oneEmployeeData = data.data;
        
      this.leaveempname = oneEmployeeData[0].lmselEtedEmployeeName;
      this.leaveempid = oneEmployeeData[0].lmselEtedEmployeeId;
      this.leavetableData = new MatTableDataSource<viewleaveGrid>(data.data);
      
      
    }
  
    });
}
getLeaveTypeName(leaveTypeId:any){
if(leaveTypeId==2){
  return "Sick";
}
else if(leaveTypeId==3){
  return "Casual";
}
else (leaveTypeId==1) 
{
  return "Annual"
}

}
}
