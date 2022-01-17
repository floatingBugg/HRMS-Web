import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
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
  LeaveType: Leavetype[] = [
    { value: 'Sick', viewValue: 'Sick' },
    { value: 'Annual', viewValue: 'Annual' },
    { value: 'Casual', viewValue: 'Casual' },
  ];
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });
  
  constructor() { }

  ngOnInit(): void {
  }

}



