import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, FormArray, Validators} from '@angular/forms';
import { MatStartDate } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EmployeeDataService } from '../services/employee-data.service';
import { LeaveService } from '../services/leave.service';
import { PersonalDetailsService } from '../services/personal-details.service';


interface Leavetype {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-leaveform',
  templateUrl: './leaveform.component.html',
  styleUrls: ['./leaveform.component.scss']

})

// export class DateRangePickerOverviewExample {}
export class LeaveformComponent implements OnInit {
  
  _update:boolean=false
  _delete:boolean=false
  _insert:boolean=false
  _view:boolean=false
  _employeeView:boolean=false
  
  _roleId = localStorage.getItem('loggedIn_RoleId');
  LeaveType: Leavetype[] = [
    { value: 'Sick', viewValue: 'Sick' },
    { value: 'Annual', viewValue: 'Annual' },
    { value: 'Casual', viewValue: 'Casual' },
    
  ];
  emsTblWorkingHistory: any = FormArray;
  leaveform: any = FormGroup;
  startdate:any;
  endDate:any;
  day: any;
  diff: any;
  profDetailsJoiningDate: any;
  noOfDays: any;
  monthValue: any;
  newDate: any;
  probationDate: any;
  monthval: any = 3;
  whDuration: any;
  errorMsg: any;


  constructor(
   public employeeData: EmployeeDataService,
    private personaldetails: PersonalDetailsService,
    private fb: FormBuilder,
    private router: Router,
    private leave:LeaveService
  ) { 
    this.createForm();
  }

  ngOnInit(): void {
    this.leaveform.controls['name'].setValue(this.leave.name)
  }
createForm(){
  this.leaveform = this.fb.group({
    name:['',Validators.required],
    leaveType:['',Validators.required],
    startDate:[],
    endDate:[],
    duration:[],
    reason:[]
  })
}


  onKeypressEvent(event: any, i: any) {
    this.startdate = event.target.value;
    console.log(this.startdate);
  }
  onKeypressEvent2(event: any, i: any) {
    this.endDate = event.target.value;
    console.log(this.endDate);
  }
  compareDates(index: any) {
    this.startdate = this.leaveform.controls['startDate'].value;
    this.endDate = this.leaveform.controls['endDate'].value;
    console.log(this.startdate);
    console.log(this.endDate);
    let start: any = new Date(this.startdate);
    let end: any = new Date(this.endDate);
    this.diff = (end - start)  ;
    let msInDay = 1000 * 3600 * 24;
    this.noOfDays = this.diff / msInDay;
    console.log('new Date ', this.diff / msInDay);

    if (this.startdate != null && this.endDate != null) {
      this.getDuration(index);
    }
  }

  getDuration(index: any) {
    var years = Math.floor(this.noOfDays / 365);
    var months = Math.floor((this.noOfDays % 365) / 30);
    var days = Math.floor((this.noOfDays % 365) % 30) + 1;

    if (years == 0 && months == 0) {
      this.whDuration = String([days, ' days '].join(''));
    } else if (months == 0) {
      this.whDuration = String([years, ` years `, days, ' days '].join(''));
    } else if (years == 0) {
      this.whDuration = String([months, ' months ', days, ' days '].join(''));
    } else {
      this.whDuration = String(
        [years, ` years `, months, ' months ', days, ' days '].join('')
      );
    }
    this.leaveform.controls['duration'].setValue(this.whDuration);
    return console.log(this.whDuration);
  }
  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.employeeData.filter = filterValue.trim().toLowerCase();
  //   this.personalData.filter = filterValue.trim().toLowerCase();
  // }
}

  




