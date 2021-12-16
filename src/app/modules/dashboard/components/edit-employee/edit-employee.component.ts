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
  ///////Emergency Contact ////////
  public emergencyContact = [
    {
      etecFirstName: '',
      etecLastName: '',
      etecRelation: '',
      etecContactNumber: '',
      etecAddress: '',
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
        console.log(this.editDataArray);
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
        //////Emergency Contact /////
        this.emergencyContact = oneEmployeeData.emsTblEmergencyContact;
        console.log('emergencyContact', this.emergencyContact);
        for (let i = 0; i < this.emergencyContact.length; i++) {
          this.addEmergencyContact();
          console.log(this.emergencyContact.length, i);
          let control =
            this.personalDetailsForm.controls['emsTblEmergencyContact'][
              'controls'
            ][i]['controls'];
          control['etecFirstName'].patchValue(
            this.emergencyContact[i]['etecFirstName']
          );
          control['etecLastName'].patchValue(
            this.emergencyContact[i]['etecLastName']
          );
          control['etecRelation'].patchValue(
            this.emergencyContact[i]['etecRelation']
          );
          control['etecContactNumber'].patchValue(
            this.emergencyContact[i]['etecContactNumber']
          );
          control['etecAddress'].patchValue(
            this.emergencyContact[i]['etecAddress']
          );
          console.log(
            this.personalDetailsForm.get('emsTblEmergencyContact')[
              'controls'
            ][0]['controls'].length
          );
          // let value = control['etecFirstName'].value;
          console.log(control);

          console.log(
            'emstable',
            oneEmployeeData['emsTblEmergencyContact'][i]['etecFirstName']
          );
        }
      }
    });
  }

  ////////Academic Qualification/////////////

  addAcademicQualificationList(): FormGroup {
    return this.fb.group({
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
      etepdProbation: [],
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
  updateData() {
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

  isAddEmergencyDisabled() {
    let result =
      this.personalDetailsForm.controls['emsTblEmergencyContact']['controls'][0]
        .valid;
    return !result;
  }
}
