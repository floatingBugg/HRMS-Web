import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-employee-failure-dialog',
  templateUrl: './add-employee-failure-dialog.component.html',
  styleUrls: ['./add-employee-failure-dialog.component.scss']
})
export class AddEmployeeFailureDialogComponent implements OnInit {
  errorRef:ElementRef | undefined
  constructor() { }

  ngOnInit(): void {
  }

}
