import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { PersonalDetailsService } from 'src/app/services/personal-details.service';
import { AddEmployeeFailureDialogComponent } from '../add-employee/add-employee-failure-dialog/add-employee-failure-dialog.component';
import { SuccessDialogComponent } from '../add-employee/success-dialog/success-dialog.component';
@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss'],
})
export class EditEmployeeComponent implements OnInit {
  id: any;
  personalDetailsForm: any = FormGroup;
  emsTblAcademicQualification: any = FormArray;
  emsTblEmployeeProfessionalDetails: any = FormArray;
  emsTblProfessionalQualification: any = FormArray;
  emsTblWorkingHistory: any = FormArray;
  emsTblEmergencyContact: any = FormArray;
  public editDataArray: any = FormArray;
  public empID: any;
  public firstName: any;
  public lastname: any;
  public phoneNo: any;
  public cnic: any;
  public personalEmail: any;
  public professionalEmail: any;
  public address: any;
  public dob: any;
  public gender: any;
  public maritalStatus: any;
  public employementStatus: any;
  public bloodGroup: any;
  public religion: any;
  public nationality: any;
  probationDate: any;
  monthval: any = 3;
  newDate: any;
  ///////Emergency Contact ////////
  public emergencyContact = [
    {
      etecEcId: '',
      etecFirstName: '',
      etecLastName: '',
      etecRelation: '',
      etecContactNumber: '',
      etecAddress: '',
    },
  ];

  professionalDetails = [
    {
      etepdSalary: [''],
      etepdProbation: [''],
      etepdDesignation: [''],
      etepdJoiningDate: [null],
    },
  ];
  public academicQualification = [
    {
      etaqAqId:'',
      etaqQualification: '',
      etaqPassingYear: '',
      etaqCgpa: '',
      etaqInstituteName: '',
    },
  ];
  professionalQualification = [
    {
      etpqCertification: '',
      etpqStratDate: '',
      etpqEndDate: '',
      etpqInstituteName: '',
    },
  ];
  workingHistory = [
    {
      etwhCompanyName: '',
      etwhDesignation: '',
      etwhStratDate: '',
      etwhEndDate: '',
      etwhDuration: '',
    },
  ];
  userId = localStorage.getItem('loggedIn_UserId');
  userName = localStorage.getItem('loggedIn_UserName');
  constructor(
    public empDataService: PersonalDetailsService,
    private personaldetails: PersonalDetailsService,
    public route: ActivatedRoute,
    private fb: FormBuilder,
    public dialog: MatDialog
  ) {
    this.updateForm();
  }
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.empDataService.viewEmployeeData(this.id).subscribe((data) => {
      if (data.success) {
        let oneEmployeeData = data.data[0];
        console.log(oneEmployeeData);
        this.editDataArray = data.data[0];
        console.log('edit array', this.editDataArray);
        this.empID = oneEmployeeData.etedEmployeeId;
        this.personalDetailsForm.controls['etedEmployeeId'].setValue(
          oneEmployeeData.etedEmployeeId
        );
        this.personalDetailsForm.controls['etedFirstName'].setValue(
          oneEmployeeData.etedFirstName
        );
        this.personalDetailsForm.controls['etedLastName'].setValue(
          oneEmployeeData.etedLastName
        );
        this.personalDetailsForm.controls['etedContactNumber'].setValue(
          oneEmployeeData.etedContactNumber
        );
        this.personalDetailsForm.controls['etedCnic'].setValue(
          oneEmployeeData.etedCnic
        );
        this.personalDetailsForm.controls['etedEmailAddress'].setValue(
          oneEmployeeData.etedEmailAddress
        );
        this.personalDetailsForm.controls['etedOfficialEmailAddress'].setValue(
          oneEmployeeData.etedOfficialEmailAddress
        );
        this.personalDetailsForm.controls['etedAddress'].setValue(
          oneEmployeeData.etedAddress
        );
        this.personalDetailsForm.controls['etedDob'].setValue(
          oneEmployeeData.etedDob
        );
        this.personalDetailsForm.controls['etedGender'].setValue(
          oneEmployeeData.etedGender
        );
        this.personalDetailsForm.controls['etedMaritalStatus'].setValue(
          oneEmployeeData.etedMaritalStatus
        );
        this.personalDetailsForm.controls['etedStatus'].setValue(
          oneEmployeeData.etedStatus
        );
        this.personalDetailsForm.controls['etedBloodGroup'].setValue(
          oneEmployeeData.etedBloodGroup
        );
        this.personalDetailsForm.controls['etedNationality'].setValue(
          oneEmployeeData.etedNationality
        );
        this.personalDetailsForm.controls['etedReligion'].setValue(
          oneEmployeeData.etedReligion
        );

        ///////Professional Details//////
        this.professionalDetails =
          oneEmployeeData.emsTblEmployeeProfessionalDetails;
        let controlProfessionalDetails =
          this.personalDetailsForm.controls[
            'emsTblEmployeeProfessionalDetails'
          ]['controls'][0]['controls'];
        controlProfessionalDetails['etepdDesignation'].patchValue(
          this.professionalDetails[0]['etepdDesignation']
        );
        controlProfessionalDetails['etepdSalary'].patchValue(
          this.professionalDetails[0]['etepdSalary']
        );
        controlProfessionalDetails['etepdJoiningDate'].patchValue(
          this.professionalDetails[0]['etepdJoiningDate']
        );
        controlProfessionalDetails['etepdProbation'].patchValue(
          this.professionalDetails[0]['etepdProbation']
        );
        console.log(
          'professional details',
          controlProfessionalDetails['etepdDesignation']
        );

        //////Emergency Contact /////
        this.emergencyContact = oneEmployeeData.emsTblEmergencyContact;
        for (let i = 0; i < this.emergencyContact.length; i++) {
          this.addEmergencyContact();
          let controlEmergencyContact =
            this.personalDetailsForm.controls['emsTblEmergencyContact'][
              'controls'
            ][i]['controls'];
          // console.log( 'hello',
          //   controlEmergencyContact=this.emergencyContact
          // );
          controlEmergencyContact['etecFirstName'].patchValue(
            this.emergencyContact[i]['etecFirstName']
          );
          controlEmergencyContact['etecLastName'].patchValue(
            this.emergencyContact[i]['etecLastName']
          );
          controlEmergencyContact['etecRelation'].patchValue(
            this.emergencyContact[i]['etecRelation']
          );
          controlEmergencyContact['etecContactNumber'].patchValue(
            this.emergencyContact[i]['etecContactNumber']
          );
          controlEmergencyContact['etecAddress'].patchValue(
            this.emergencyContact[i]['etecAddress']
          );
        }
        /////Academic Qualification //////
        this.academicQualification =
          oneEmployeeData.emsTblAcademicQualification;
          for (let i = 0; i < this.academicQualification.length; i++) {
            let controlAcademicQualificationId = (this.personalDetailsForm.controls[
              'emsTblAcademicQualification'
            ]['controls'][i]['controls']['etaqAqId'] =
              this.emsTblAcademicQualification[i]['etaqAqId']);
            console.log('Academic id',controlAcademicQualificationId);
          }
        for (let i = 0; i < this.academicQualification.length; i++) {
          this.addAcademicQualification();
          let controlAcademicQualification =
            this.personalDetailsForm.controls['emsTblAcademicQualification'][
              'controls'
            ][i]['controls'];
          controlAcademicQualification['etaqQualification'].patchValue(
            this.academicQualification[i]['etaqQualification']
          );
          controlAcademicQualification['etaqPassingYear'].patchValue(
            this.academicQualification[i]['etaqPassingYear']
          );
          controlAcademicQualification['etaqCgpa'].patchValue(
            this.academicQualification[i]['etaqCgpa']
          );
          controlAcademicQualification['etaqInstituteName'].patchValue(
            this.academicQualification[i]['etaqInstituteName']
          );
        }

        ////////Professional Qualification////////
        this.professionalQualification =
          oneEmployeeData.emsTblProfessionalQualification;
        for (let i = 0; i < this.professionalQualification.length; i++) {
          this.addProfessionalQualification();
          let controlProfessionalQualification =
            this.personalDetailsForm.controls[
              'emsTblProfessionalQualification'
            ]['controls'][i]['controls'];
          controlProfessionalQualification['etpqCertification'].patchValue(
            this.professionalQualification[i]['etpqCertification']
          );
          controlProfessionalQualification['etpqStratDate'].patchValue(
            this.professionalQualification[i]['etpqStratDate']
          );
          controlProfessionalQualification['etpqEndDate'].patchValue(
            this.professionalQualification[i]['etpqEndDate']
          );
          controlProfessionalQualification['etpqInstituteName'].patchValue(
            this.professionalQualification[i]['etpqInstituteName']
          );
        }

        /////Working History////
        this.workingHistory = oneEmployeeData.emsTblWorkingHistory;
        for (let i = 0; i < this.workingHistory.length; i++) {
          this.addWorkingHistory();
          let controlWorkingHistory =
            this.personalDetailsForm.controls['emsTblWorkingHistory'][
              'controls'
            ][i]['controls'];
          controlWorkingHistory['etwhCompanyName'].patchValue(
            this.workingHistory[i]['etwhCompanyName']
          );
          controlWorkingHistory['etwhDesignation'].patchValue(
            this.workingHistory[i]['etwhDesignation']
          );
          controlWorkingHistory['etwhStratDate'].patchValue(
            this.workingHistory[i]['etwhStratDate']
          );
          controlWorkingHistory['etwhEndDate'].patchValue(
            this.workingHistory[i]['etwhEndDate']
          );
          controlWorkingHistory['etwhDuration'].patchValue(
            this.workingHistory[i]['etwhDuration']
          );
        }
      }
    });
  }

  ////////Academic Qualification/////////////

  addAcademicQualificationList(): FormGroup {
    return this.fb.group({
      etaqAqId:[0],
      etaqQualification: [''],
      etaqPassingYear: [0],
      etaqCgpa: [0],
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
      etecEcId: [0],
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
  updateForm() {
    this.personalDetailsForm = this.fb.group({
      etedEmployeeId: [''],
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
      etedModifiedBy: [''],
      etedModifiedByName: [''],
      emsTblEmergencyContact: this.fb.array([]),
      emsTblAcademicQualification: this.fb.array([]),
      emsTblEmployeeProfessionalDetails: this.fb.array([
        this.addEmsTblEmployeeProfessionalDetails(),
      ]),
      emsTblProfessionalQualification: this.fb.array([]),
      emsTblWorkingHistory: this.fb.array([]),
    });
  }

  updateData() {
    debugger;
    console.log(this.personalDetailsForm.value);
    this.personaldetails
      .updateEmployeeData(this.personalDetailsForm.value)
      .subscribe((result) => {
        if (result.success) {
          this.dialog.open(SuccessDialogComponent);
          console.log(result.message);
        } else {
          this.dialog.open(AddEmployeeFailureDialogComponent);
          console.log(result.message);
        }
      });
  }

  // getAcademicData() {
  //   this.empDataService.viewEmployeeData(this.id).subscribe((data) => {
  //     if (data.success) {
  //       let academicQualificationArray = data.data[0];
  //       let academicQualification =
  //         academicQualificationArray.emsTblAcademicQualification;
  //       console.log(this.id);
  //       console.log('academicQualification', academicQualification, this.id);
  //       for (let i = 0; i < academicQualification.length; i++) {
  //         this.addAcademicQualification();
  //         console.log(academicQualification.length, i);
  //         let controlAcademy =
  //           this.personalDetailsForm.controls['emsTblAcademicQualification'][
  //             'controls'
  //           ][i]['controls'];
  //         controlAcademy['etaqQualification'].patchValue(
  //           academicQualificationArray[i]['etaqQualification']
  //         );
  //         controlAcademy['etaqPassingYear'].patchValue(
  //           academicQualificationArray[i]['etaqPassingYear']
  //         );
  //         controlAcademy['etaqCgpa'].patchValue(
  //           academicQualificationArray[i]['etaqCgpa']
  //         );
  //         controlAcademy['etaqInstituteName'].patchValue(
  //           academicQualificationArray[i]['etaqInstituteName']
  //         );
  //       }
  //     }
  //   });
  // }
  onlyNumbersAllowed(event: any): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  getJoiningDate(index: any) {
    let control = this.personalDetailsForm.get(
      'emsTblEmployeeProfessionalDetails'
    )['controls'][index]['controls'];
    let pdjoinDate = control['etepdJoiningDate'].value;
    let d = new Date(pdjoinDate);
    this.monthval = (<HTMLInputElement>(
      document.getElementById('monthVal')
    )).value;
    let probationDate = d.setMonth(d.getMonth() + parseInt(this.monthval));
    this.newDate = new Date(probationDate);
    this.probationDate = new Intl.DateTimeFormat('en-GB', {
      dateStyle: 'full',
    }).format(this.newDate);
    control['etepdProbation'].setValue(this.probationDate);
  }

  isAddEmergencyDisabled() {
    let result =
      this.personalDetailsForm.controls['emsTblEmergencyContact']['controls'][0]
        .valid;
    return !result;
  }
}
