import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormArray,
  Validators,
  FormGroup,
  FormBuilder,
  AbstractControl,
  RequiredValidator
} from '@angular/forms';
import { Router } from '@angular/router';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';


@Component({
  selector: 'app-mouse',
  templateUrl: './mouse.component.html',
  styleUrls: ['./mouse.component.scss']
})
export class MouseComponent implements OnInit {
   mouseForm: any = FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.mouseForm = this.fb.group({
      etedFirstName: [''],
      etedLastName: [''],
      etedContactNumber: [''],
      etedCnic: [''],
      etedEmailAddress: [''],
      etedOfficialEmailAddress: [''],
      etedAddress: [''],
      etedDob: [''],
      etedGender: [''],
      etedMaritalStatus: [''],
      etedStatus: [''],
      etedBloodGroup: [''],
      etedReligion: [''],
      etedNationality: [''],
    });
  }
}
