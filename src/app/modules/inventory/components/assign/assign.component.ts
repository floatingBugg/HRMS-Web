import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormArray,Validators,FormGroup,
  FormBuilder,AbstractControl,RequiredValidator} from '@angular/forms';
import { Router } from '@angular/router';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.scss']
})
export class AssignComponent implements OnInit {
  assignForm: any = FormGroup;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<any>,
   
    
  ) { }

  ngOnInit(): void {
    this.createForm();
  }
  onNoClick()
   {
    this.dialogRef.close();
  }
  onlyNumbersAllowed(event: any): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  createForm() {
    this.assignForm = this.fb.group({
      itasQuantity: ['', Validators.required],
      itasAssignedDate: ['', Validators.required],
    
    });
  }


}
