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
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
})
export class AddEmployeeComponent implements OnInit {
  personalDetailsForm: any = FormGroup;
  emsTblAcademicQualification: any = FormArray;
  emsTblEmployeeProfessionalDetails: any = FormArray;
  emsTblProfessionalQualification: any = FormArray;
  emsTblWorkingHistory: any = FormArray;
  emsTblEmergencyContact: any = FormArray;
  whStartDate: any;
  whStartDates: any;
  whEndDate: any;
  startDate: any;
  day:any;
  diff :any;
  profDetailsJoiningDate:any;
  noOfDays:any
  monthValue:any;
  newDate:any;
  constructor(
    public employeeData: EmployeeDataService,
    private personaldetails: PersonalDetailsService,
    private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog
  ) {
    console.log(this.whStartDate);
    console.log('hellozzzz',this.day)
  }

  ngOnInit() {
    this.createForm();
    // this.whStartDates = this.startDate.value;
    // console.log('date val:' , this.whStartDates)
    console.log(this.whStartDate)
    console.log('hellottt',this.day)
  }

  ////////Academic Qualification/////////////

  addAcademicQualificationList(): FormGroup {
    return this.fb.group({
      etaqQualification: [''],
      etaqPassingYear: [''],
      etaqCgpa: [''],
      etaqInstituteName: [''],
    });
  }

  addAcademicQualification(): void {
    this.emsTblAcademicQualification = this.personalDetailsForm.get(
      'emsTblAcademicQualification'
    ) as FormArray;
    this.emsTblAcademicQualification.push(this.addAcademicQualificationList());
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

  ///////Professional Details/////////////
  addEmsTblEmployeeProfessionalDetails(): FormGroup {
    return this.fb.group({
      etepdSalary: [''],
      etepdProbation: [this.newDate],
      etepdDesignation: [''],
      etepdJoiningDate: [null],
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
      etpqStratDate: [null],
      etpqEndDate: [null],
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
      etwhStratDate: [null],
      etwhEndDate: [null],
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

      emsTblEmergencyContact: this.fb.array([this.addemsTblEmergencyContact()]),
      emsTblAcademicQualification: this.fb.array([
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
    console.log(this.personalDetailsForm.value);
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
  onKeypressEvent(event: any, i: any) {
    this.whStartDate = event.target.value;
    console.log(this.whStartDate);
  }
  onKeypressEvent2(event: any, i: any) {
    this.whEndDate = event.target.value;
    console.log(this.whEndDate);
  }

  compareDates(index: any) {
    let control = this.personalDetailsForm.get('emsTblWorkingHistory')['controls'][index]['controls'];
    this.whStartDate = control['etwhStratDate'].value;
    this.whEndDate = control['etwhEndDate'].value;
    console.log(this.whStartDate);
    console.log(this.whEndDate);
     let start:any =new Date( this.whStartDate) ;
     let end:any = new Date( this.whEndDate)
     this.diff = end-start;
     let msInDay = 1000*3600*24
     this.noOfDays= this.diff/msInDay;
     console.log('new Date ', this.diff/msInDay)
    // console.log(contorl['etwhStratDate'].value);
    // let diff = this.whEndDate - this.whStartDate
    // let msInDay = 1000*3600*24
    // this.day = diff/msInDay;
    // console.log('hello',diff/msInDay)
  }

  getDuration( ){
  //  let months: number=0;
  //  let year:number =0;
  //  let days:number=0;
  //  let weeks:number=0;
  //   let msInDay = 1000*3600*24
  //   this.day = this.diff/msInDay;
  //   console.log('hello',this.diff/msInDay)
  //   while(this.day){
  //     if(this.day>= 365){
  //        year++;
  //        this.day -= 365;
  //     }else if(this.day >= 30 || this.day >= 31 || this.day >= 29){
  //        months++;
  //        this.day -= 30;
  //     }else if(this.day >= 7){
  //        weeks++;
  //        this.day -= 7;
  //     }else{
  //        days++;
  //        this.day--;
  //     }
  //  };
  //  console.log('ffff',days ,'days',year,'year',months,'months',weeks,'weeks')
  var years = Math.floor( this.noOfDays / 365);
    var months = Math.floor( this.noOfDays % 365 / 30);
    var days = Math.floor( this.noOfDays % 365 % 30);
    console.log(years,':', months , ':', days)
    return [years, months, days].join(':');

  }

  getJoiningDate(index: any){
   let control = this.personalDetailsForm.get('emsTblEmployeeProfessionalDetails')['controls'][index]['controls'];
   let pdjoinDate= control['etepdJoiningDate'].value;
   let d = new Date(pdjoinDate)
  let monthval = (<HTMLInputElement>document.getElementById("monthVal")).value
  console.log(monthval)
  let probationDate = d.setMonth(d.getMonth()+parseInt(monthval));
    this.newDate = new Date(probationDate);

   console.log('new Date ', this.newDate)
  console.log("ederef",monthval);
  }
}
