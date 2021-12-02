import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormArray,
  Validators,
  FormGroup,
  FormBuilder,
  AbstractControl,
} from '@angular/forms';
import { EmployeeDataService } from 'src/app/services/employee-data.service';
import { PersonalDetailsService } from 'src/app/services/personal-details.service';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
})
export class AddEmployeeComponent implements OnInit {

  personalDetailsForm: any =  FormGroup;
  EmsTblAcademicQualificationList: any =  FormArray;
  emsTblEmployeeProfessionalDetails:any = FormArray;
  emsTblProfessionalQualification:any = FormArray;
  emsTblWorkingHistory: any = FormArray;
  constructor(public employeeData: EmployeeDataService,private personaldetails: PersonalDetailsService,private fb: FormBuilder)
  {}

  ngOnInit() {
    this.createForm();
  }

  ////////Academic Qualification/////////////

  addAcademicQualificationList(): FormGroup {
    return this.fb.group({
      etaqQualification: [''],
      etaqPassingYear: [''],
      etaqCgpa: [''],
      etaqInstituteName: ['']
    });
  }

  addAcademicQualification(): void {
    this.EmsTblAcademicQualificationList = this.personalDetailsForm.get('EmsTblAcademicQualificationList') as FormArray;
    this.EmsTblAcademicQualificationList.push(this.addAcademicQualificationList());
  }

  ///////Professional Details/////////////
  addEmsTblEmployeeProfessionalDetails() : FormGroup{
    return this.fb.group({
      etepdSalary: [''],
      etepdProbation: [''],
      etepdDesignation: [''],
      etepdJoiningDate: ['']
    });
  }
  addProfessionalDetails(): void{
    this.emsTblEmployeeProfessionalDetails = this.personalDetailsForm.get('emsTblEmployeeProfessionalDetails') as FormArray;
    this.emsTblEmployeeProfessionalDetails.push(this.addEmsTblEmployeeProfessionalDetails());
  }
/////////Professional Qualification/////////////
addemsTblProfessionalQualification():FormGroup{
  return this.fb.group({
    etpqCertification: [''],
    etpqStratDate: [''],
    etpqEndDate: [''],
    etpqInstituteName: ['']
  });
}
addProfessionalQualification():void{
  this.emsTblProfessionalQualification = this.personalDetailsForm.get('emsTblProfessionalQualification') as FormArray;
  this.emsTblProfessionalQualification.push(this.addemsTblProfessionalQualification());
}

//////Working History//////////
addemsTblWorkingHistory(): FormGroup{
  return this.fb.group({
    etwhCompanyName: [''],
    etwhDesignation: [''],
    etwhStratDate: [''],
    etwhEndDate: [''],
    etwhDuration: [''],
  });
}
addWorkingHistory():void{
  this.emsTblWorkingHistory= this.personalDetailsForm.get('emsTblWorkingHistory') as FormArray;
  this.emsTblWorkingHistory.push(this.addemsTblWorkingHistory());
}
  createForm() {
    this.personalDetailsForm = this.fb.group({
      etedFirstName: [''],
      etedLastName: [''],
      etedEmailAddress: [''],
      etedOfficialEmailAddress: [''],
      etedCnic: [''],
      etedDob: [''],
      etedContactNumber: [''],
      etedAddress: [''],
      etedGender: [''],
      etedMaritalStatus: [''],
      etedBloodGroup: [''],
      etedReligion: [''],
      etedNationality: [''],
      etedStatus: [''],
      etecFirstName: [''],
      etecLastName: [''],
      etecRelation: [''],
      etecContactNumber: [''],
      etecAddress: [''],
      EmsTblAcademicQualificationList: this.fb.array([ this.addAcademicQualificationList()]),
      emsTblEmployeeProfessionalDetails: this.fb.array([this.addEmsTblEmployeeProfessionalDetails()]),
      emsTblProfessionalQualification: this.fb.array([this.addemsTblProfessionalQualification()]),
      emsTblWorkingHistory: this.fb.array([]),
    });
  }

  submitData() {
    // this.personalDetailsForm.controls['emsTblAcademicQualification']
    console.log(this.personalDetailsForm.value);
    this.personaldetails
      .personalDetails(this.personalDetailsForm.value)
      .subscribe((result) => {
        console.log(result.message);
      });
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
