import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, FormArray, Validators} from '@angular/forms';
import { MatStartDate } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
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
  userId = localStorage.getItem('loggedIn_UserId');
  userName = localStorage.getItem('loggedIn_UserName');
  
  _roleId = localStorage.getItem('loggedIn_RoleId');
  // LeaveType: Leavetype[] = [
  //   { value: 'Sick', viewValue: 'Sick' },
  //   { value: 'Annual', viewValue: 'Annual' },
  //   { value: 'Casual', viewValue: 'Casual' },
    
  // ];
  
  leaveform: any = FormGroup;
  startdate:any;
  Id: any;

  endDate:any;
  day: any;
  diff: any;
  profDetailsJoiningDate: any;
  noOfDays: any;
  monthValue: any;
  newDate: any;
  employeelist:any
  probationDate: any;
  monthval: any = 3;
  whDuration: any;
  errorMsg: any;
  // dialog: any;
  public LeaveFormDetails:any = -1;
  
  value: any;
  employeeDdlData:any;


  constructor(
   public employeeData: EmployeeDataService,
    private personaldetails: PersonalDetailsService,
    private fb: FormBuilder,
    private router: Router,
    private leave:LeaveService,
    private dialog:MatDialog
  ) { 
    this.createleaveForm();
  }

  ngOnInit(): void {
    this.createleaveForm();
    // this.leaveform.controls['lmselEtedEmployeeName'].setValue(this.leave.name)
    this.employeeDdlData = this.leave.data;
    console.log(this.employeeDdlData)
  }
createleaveForm(){
  this.leaveform = this.fb.group({
    // lmselEtedEmployeeName:['',Validators.required],
    lmselEtedEmployeeId:[0,Validators.required],
    lmselLeaveType:['',Validators.required],
    lmselStartDate:['',Validators.required],
    lmselEndDate:['',Validators.required],
    lmselDays:[],
    reason:[],
    lmselCreatedBy:[this.userId],
    lmselCreatedByName:[this.userName]
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
    this.startdate = this.leaveform.controls['lmselStartDate'].value;
    this.endDate = this.leaveform.controls['lmselEndDate'].value;
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
  isleaveFormDisabled() {
    if (this.LeaveFormDetails >= 0) {
      let result =
        this.LeaveFormDetails.controls['leaveform'][
          'controls'
        ][0].valid;
      return !result;
    } else {
      return false;
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
    this.leaveform.controls['lmselDays'].setValue(this.noOfDays);
    return console.log(this.whDuration);
  }
  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.employeeData.filter = filterValue.trim().toLowerCase();
  //   this.personalData.filter = filterValue.trim().toLowerCase();
  // }


  submitData() {
    console.log(this.leaveform.value);
    this.leave
      .assignEmployeeLeave(this.leaveform.value).subscribe((result) => {
        if (result.success) {
          Swal.fire({
            title:'Leave Assigned!',
            text:'Leave Assigned Successfully',
            icon:'success',
            showCancelButton:false,
            confirmButtonText: 'Thank You',
            cancelButtonText: 'No, keep it'
          }).then((res) => {
            this.router.navigate(["/home/leave"])
          })
          this.dialog.closeAll();
        }
        else
        {
          this.errorMsg= result.message;
          Swal.fire({
           title: 'ERROR!',
           text: this.errorMsg,
           icon: 'error',
           showCancelButton: false,
           confirmButtonText: 'Okay',
           cancelButtonText: 'No, keep it'
            })
            console.log(result.message);
                  }
                });
            }
           
          }
          