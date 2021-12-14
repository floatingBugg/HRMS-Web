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
  selector: 'app-stationery',
  templateUrl: './stationery.component.html',
  styleUrls: ['./stationery.component.scss']
})
export class StationeryComponent implements OnInit {
  stationeryForm: any = FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.stationeryForm = this.fb.group({
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
