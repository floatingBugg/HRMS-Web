import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormArray,
  Validators,
  FormGroup,
  FormBuilder,
  AbstractControl,
  RequiredValidator,
} from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeDataService } from 'src/app/services/employee-data.service';
import { PersonalDetailsService } from 'src/app/services/personal-details.service';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { SuccessDialogComponent } from './success-dialog/success-dialog.component';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
})
export class AddEmployeeComponent implements OnInit {
  personalDetailsForm: any = FormGroup;
  EmsTblAcademicQualification: any = FormArray;
  emsTblEmployeeProfessionalDetails: any = FormArray;
  emsTblProfessionalQualification: any = FormArray;
  emsTblWorkingHistory: any = FormArray;
  emsTblEmergencyContact: any = FormArray;
  constructor(
    public employeeData: EmployeeDataService,
    private personaldetails: PersonalDetailsService,
    private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.createForm();
  }

  ///////Emergency Contact//////////////
  addemsTblEmergencyContact(): FormGroup {
    return this.fb.group({
      etecFirstName: [''],
      etecLastName: [''],
      etecRelation: [''],
      etecContactNumber: [''],
      etecAddress: [''],
    });
  }

  addEmergencyContact(): void {
    this.emsTblEmergencyContact = this.personalDetailsForm.get(
      'emsTblEmergencyContact'
    ) as FormArray;
    this.emsTblEmergencyContact.push(this.addemsTblEmergencyContact());
  }
  ////////Academic Qualification/////////////

  addAcademicQualificationList(): FormGroup {
    return this.fb.group({
      etaqQualification: [''],
      etaqPassingYear: ['', Validators.pattern('^[0-9]*$')],
      etaqCgpa: ['', Validators.required, Validators.pattern('^[0-9]*$')],
      etaqInstituteName: [''],
    });
  }

  addAcademicQualification(): void {
    this.EmsTblAcademicQualification = this.personalDetailsForm.get(
      'EmsTblAcademicQualificationList'
    ) as FormArray;
    this.EmsTblAcademicQualification.push(
      this.addAcademicQualificationList()
    );
  }

  ///////Professional Details/////////////
  addEmsTblEmployeeProfessionalDetails(): FormGroup {
    return this.fb.group({
      etepdSalary: [''],
      etepdProbation: [''],
      etepdDesignation: [''],
      etepdJoiningDate: [''],
    });
  }
  addProfessionalDetails(): void {
    this.emsTblEmployeeProfessionalDetails = this.personalDetailsForm.get(
      'emsTblEmployeeProfessionalDetails'
    ) as FormArray;
    this.emsTblEmployeeProfessionalDetails.push(
      this.addEmsTblEmployeeProfessionalDetails()
    );
  }
  /////////Professional Qualification/////////////
  addemsTblProfessionalQualification(): FormGroup {
    return this.fb.group({
      etpqCertification: [''],
      etpqStratDate: [''],
      etpqEndDate: [''],
      etpqInstituteName: [''],
    });
  }
  addProfessionalQualification(): void {
    this.emsTblProfessionalQualification = this.personalDetailsForm.get(
      'emsTblProfessionalQualification'
    ) as FormArray;
    this.emsTblProfessionalQualification.push(
      this.addemsTblProfessionalQualification()
    );
  }

  //////Working History//////////
  addemsTblWorkingHistory(): FormGroup {
    return this.fb.group({
      etwhCompanyName: [''],
      etwhDesignation: [''],
      etwhStratDate: [''],
      etwhEndDate: [''],
      etwhDuration: [''],
    });
  }
  addWorkingHistory(): void {
    this.emsTblWorkingHistory = this.personalDetailsForm.get(
      'emsTblWorkingHistory'
    ) as FormArray;
    this.emsTblWorkingHistory.push(this.addemsTblWorkingHistory());
  }
  createForm() {
    this.personalDetailsForm = this.fb.group({
      etedFirstName: ['', Validators.required],
      etedLastName: ['', Validators.required],
      etedContactNumber: ['', Validators.required],
      etedCnic: ['', Validators.required],
      etedEmailAddress: ['', Validators.required],
      etedOfficialEmailAddress: ['', Validators.required],
      etedAddress: ['', Validators.required],
      etedDob: ['', Validators.required],
      etedGender: ['', Validators.required],
      etedMaritalStatus: ['', Validators.required],
      etedStatus: ['', Validators.required],
      etedBloodGroup: ['', Validators.required],
      etedReligion: ['', Validators.required],
      etedNationality: ['', Validators.required],
      
      emsTblEmergencyContact: this.fb.array([this.addemsTblEmergencyContact()]),
      EmsTblAcademicQualification: this.fb.array([
        this.addAcademicQualificationList(),
      ]),
      emsTblEmployeeProfessionalDetails: this.fb.array([
        this.addEmsTblEmployeeProfessionalDetails(),
      ]),
      emsTblProfessionalQualification: this.fb.array([
        this.addemsTblProfessionalQualification(),
      ]),
      emsTblWorkingHistory: this.fb.array([this.addemsTblWorkingHistory()]),
    });
  }
  submitData() {
    // if(this.personalDetailsForm.invalid) {
    //   this.personalDetailsForm.setErrors({ ...this.personalDetailsForm.errors, 'yourErrorName': true });
    //   return;
    // }
    this.personaldetails
      .personalDetails(this.personalDetailsForm.value)
      .subscribe((result) => {
        if (result.success) {
          this.dialog.open(SuccessDialogComponent);
          console.log(result.message);
        }
      });
  }
  onlyNumbersAllowed(event: any): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  // get qualifications(): any {
  //   return this.personalDetailsForm.controls[
  //     'emsTblAcademicQualification'
  //   ] as FormArray;
  // }

  // addQualification() {
  //   let data = this.qualifications.push(this.qualificationForm);
  //   console.log(data);
  // }

  // deleteQualifications(index: number) {
  //   this.qualifications.removeAt(index);
  // }
}
