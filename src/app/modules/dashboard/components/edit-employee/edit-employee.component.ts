import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { PersonalDetailsService } from 'src/app/services/personal-details.service';
import { AddEmployeeFailureDialogComponent } from '../add-employee/add-employee-failure-dialog/add-employee-failure-dialog.component';
import { SuccessDialogComponent } from '../add-employee/success-dialog/success-dialog.component';
import { saveAs } from 'file-saver';

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
  whDuration: any;
  whStartDate: any;
  whStartDates: any;
  whEndDate: any;
  diff: any;
  noOfDays: any;
  imageUrl: any[] = [];
  acadImageUrl: any[] = [];
  profQualificationUrl: any[] = [];
  workingHistoryUrl: any[] = [];
  profilePicUrl: any;
  isFileChanged!: boolean;
  public currentIndexEmergency: any = -1;
  public currentIndexAcademic: any = -1;
  public currentIndexProfessionalQ: any = -1;
  public currentIndexWorkingHistory: any = -1;
  public currentIndexProfessionalDetails: any = 0;
  ///////Arrays To assign Value////////
  emergencyContact: any;
  professionalDetails: any;
  academicQualification: any;
  professionalQualification: any;
  workingHistory: any;
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
        console.log('Personal Form', this.personalDetailsForm);
        this.profilePicUrl =
         this.personaldetails.apiUrl +  oneEmployeeData.etedPhotograph;
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
        controlProfessionalDetails['etepdPdId'].setValue(
          this.professionalDetails[0]['etepdPdId']
        );
        controlProfessionalDetails['etepdDesignation'].setValue(
          this.professionalDetails[0]['etepdDesignation']
        );
        controlProfessionalDetails['etepdSalary'].setValue(
          this.professionalDetails[0]['etepdSalary']
        );
        controlProfessionalDetails['etepdJoiningDate'].setValue(
          this.professionalDetails[0]['etepdJoiningDate']
        );
        controlProfessionalDetails['etepdProbation'].setValue(
          this.professionalDetails[0]['etepdProbation']
        );
        //////Emergency Contact /////
        this.emergencyContact = oneEmployeeData.emsTblEmergencyContact;
        for (let i = 0; i < this.emergencyContact.length; i++) {
          this.addEmergencyContact();
          let controlEmergencyContact =
            this.personalDetailsForm.controls['emsTblEmergencyContact'][
              'controls'
            ][i]['controls'];

          controlEmergencyContact['etecEcId'].setValue(
            this.emergencyContact[i]['etecEcId']
          );
          controlEmergencyContact['etecFirstName'].setValue(
            this.emergencyContact[i]['etecFirstName']
          );
          controlEmergencyContact['etecLastName'].setValue(
            this.emergencyContact[i]['etecLastName']
          );
          controlEmergencyContact['etecRelation'].setValue(
            this.emergencyContact[i]['etecRelation']
          );
          controlEmergencyContact['etecContactNumber'].setValue(
            this.emergencyContact[i]['etecContactNumber']
          );
          controlEmergencyContact['etecAddress'].setValue(
            this.emergencyContact[i]['etecAddress']
          );
        }
        /////Academic Qualification //////
        this.academicQualification =
          oneEmployeeData.emsTblAcademicQualification;
        for (let i = 0; i < this.academicQualification.length; i++) {
          if(this.academicQualification[i].etaqUploadDocuments!="" && this.academicQualification[i].etaqUploadDocuments!=null){
          this.imageUrl[i] =
            this.personaldetails.apiUrl +
            this.academicQualification[i].etaqUploadDocuments;
          }else{
            this.imageUrl[i] = null;
          }
          this.addAcademicQualification();
          let controlAcademicQualification =
            this.personalDetailsForm.controls['emsTblAcademicQualification'][
              'controls'
            ][i]['controls'];
          controlAcademicQualification['etaqAqId'].setValue(
            this.academicQualification[i]['etaqAqId']
          );
          controlAcademicQualification['etaqQualification'].setValue(
            this.academicQualification[i]['etaqQualification']
          );
          controlAcademicQualification['etaqPassingYear'].setValue(
            this.academicQualification[i]['etaqPassingYear']
          );
          controlAcademicQualification['etaqCgpa'].setValue(
            this.academicQualification[i]['etaqCgpa']
          );
          controlAcademicQualification['etaqInstituteName'].setValue(
            this.academicQualification[i]['etaqInstituteName']
          );
        }

        ////////Professional Qualification////////
        this.professionalQualification =
          oneEmployeeData.emsTblProfessionalQualification;
        for (let i = 0; i < this.professionalQualification.length; i++) {
          if(this.professionalQualification[i].etpqDocuments!="" && this.professionalQualification[i].etpqDocuments!=null){
          this.profQualificationUrl[i] =
            this.personaldetails.apiUrl +
            this.professionalQualification[i].etpqDocuments;
          }
          else{
            this.profQualificationUrl[i]=null;
          }
          this.addProfessionalQualification();
          let controlProfessionalQualification =
            this.personalDetailsForm.controls[
              'emsTblProfessionalQualification'
            ]['controls'][i]['controls'];

          controlProfessionalQualification['etpqCertification'].setValue(
            this.professionalQualification[i]['etpqCertification']
          );
          controlProfessionalQualification['etpqStratDate'].setValue(
            this.professionalQualification[i]['etpqStratDate']
          );
          controlProfessionalQualification['etpqEndDate'].setValue(
            this.professionalQualification[i]['etpqEndDate']
          );
          controlProfessionalQualification['etpqInstituteName'].setValue(
            this.professionalQualification[i]['etpqInstituteName']
          );
          controlProfessionalQualification['etpqPqId'].setValue(
            this.professionalQualification[i]['etpqPqId']
          );
        }

        /////Working History////
        this.workingHistory = oneEmployeeData.emsTblWorkingHistory;
        for (let i = 0; i < this.workingHistory.length; i++) {
          this.workingHistoryUrl[i] =
            this.personaldetails.apiUrl +
            this.workingHistory[i].etwhExperienceLetter;
          this.addWorkingHistory();
          let controlWorkingHistory =
            this.personalDetailsForm.controls['emsTblWorkingHistory'][
              'controls'
            ][i]['controls'];
          controlWorkingHistory['etwhWhId'].setValue(
            this.workingHistory[i]['etwhWhId']
          );
          controlWorkingHistory['etwhCompanyName'].setValue(
            this.workingHistory[i]['etwhCompanyName']
          );
          controlWorkingHistory['etwhDesignation'].setValue(
            this.workingHistory[i]['etwhDesignation']
          );
          controlWorkingHistory['etwhStratDate'].setValue(
            this.workingHistory[i]['etwhStratDate']
          );
          controlWorkingHistory['etwhEndDate'].setValue(
            this.workingHistory[i]['etwhEndDate']
          );
          controlWorkingHistory['etwhDuration'].setValue(
            this.workingHistory[i]['etwhDuration']
          );
        }
      }
    });
  }

  ////////Academic Qualification/////////////

  addAcademicQualificationList(): FormGroup {
    return this.fb.group({
      etaqAqId: [0, Validators.required],
      etaqQualification: ['', Validators.required],
      etaqPassingYear: [, Validators.required],
      etaqCgpa: [, Validators.required],
      etaqInstituteName: ['', Validators.required],
      etaqUploadDocuments: [''],


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
      etecFirstName: ['', Validators.required],
      etecLastName: ['', Validators.required],
      etecRelation: ['', Validators.required],
      etecContactNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
        ],
      ],
      etecAddress: ['', Validators.required],
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
      etepdPdId: ['', Validators.required],
      etepdSalary: ['', Validators.required],
      etepdProbation: [this.newDate, Validators.required],
      etepdDesignation: ['', Validators.required],
      etepdJoiningDate: [null, Validators.required],
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
      etpqPqId: [0, Validators.required],
      etpqCertification: ['', Validators.required],
      etpqStratDate: [null, Validators.required],
      etpqEndDate: [null, Validators.required],
      etpqInstituteName: ['', Validators.required],
      etpqDocuments: [''],
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
      etwhWhId: [0],
      etwhExperienceLetter: [''],
      etwhCompanyName: ['', Validators.required],
      etwhDesignation: ['', Validators.required],
      etwhStratDate: [null, Validators.required],
      etwhEndDate: [null, Validators.required],
      etwhDuration: ['', Validators.required],
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
      etedPhotograph: [''],
      etedFirstName: ['', Validators.required],
      etedLastName: ['', Validators.required],
      etedContactNumber: [
        ,
        [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
        ],
      ],
      etedCnic: [
        ,
        [
          Validators.required,
          Validators.minLength(13),
          Validators.maxLength(13),
        ],
      ],
      etedEmailAddress: ['', [Validators.required, Validators.email]],
      etedOfficialEmailAddress: ['', [Validators.required, Validators.email]],
      etedAddress: ['', Validators.required],
      etedDob: ['', Validators.required],
      etedGender: ['', Validators.required],
      etedMaritalStatus: ['', Validators.required],
      etedStatus: ['', Validators.required],
      etedBloodGroup: ['', Validators.required],
      etedReligion: ['', Validators.required],
      etedNationality: ['', Validators.required],
      emsTblEmergencyContact: this.fb.array([]),
      emsTblAcademicQualification: this.fb.array([]),
      emsTblEmployeeProfessionalDetails: this.fb.array([
        this.addEmsTblEmployeeProfessionalDetails(),
      ]),
      emsTblProfessionalQualification: this.fb.array([]),
      emsTblWorkingHistory: this.fb.array([]),
      etedModifiedBy: [this.userId],
      etedModifiedByName: [this.userName],
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

  compareDates(index: any) {
    let control = this.personalDetailsForm.get('emsTblWorkingHistory')[
      'controls'
    ][index]['controls'];
    this.whStartDate = control['etwhStratDate'].value;
    this.whEndDate = control['etwhEndDate'].value;
    console.log(this.whStartDate);
    console.log(this.whEndDate);
    let start: any = new Date(this.whStartDate);
    let end: any = new Date(this.whEndDate);
    this.diff = end - start;
    let msInDay = 1000 * 3600 * 24;
    this.noOfDays = this.diff / msInDay;
    console.log('new Date ', this.diff / msInDay);

    if (this.whStartDate != null && this.whEndDate != null) {
      this.getDuration(index);
    }
  }

  getDuration(index: any) {
    let control = this.personalDetailsForm.get('emsTblWorkingHistory')[
      'controls'
    ][index]['controls'];
    var years = Math.floor(this.noOfDays / 365);
    var months = Math.floor((this.noOfDays % 365) / 30);
    var days = Math.floor((this.noOfDays % 365) % 30);

    if (years == 0 && months == 0) {
      this.whDuration = String([days, ' days '].join(''));
    } else if (months == 0) {
      this.whDuration = String([years, ` years `, days, ' days '].join(''));
    } else if (years == 0) {
      this.whDuration = String([months, ' months ', days, ' days '].join(''));
    } else {
      this.whDuration = String(
        [years, ` years `, months, ' months ', days, ' days '].join('')
      );
    }
    control['etwhDuration'].setValue(this.whDuration);
    return console.log(this.whDuration);
  }

  ///// Disable Form /////////
  isAddEmergencyDisabled() {
    if (this.currentIndexEmergency >= 0) {
      let result =
        this.personalDetailsForm.controls['emsTblEmergencyContact']['controls'][
          this.currentIndexEmergency
        ].valid;
      return !result;
    } else {
      return false;
    }
  }
  isProfessionalDetailsDisabled() {
    if (this.currentIndexProfessionalDetails == 0) {
      let result =
        this.personalDetailsForm.controls['emsTblEmployeeProfessionalDetails'][
          'controls'
        ][0].valid;
      return !result;
    } else {
      return false;
    }
  }
  isAcademicQualificationDisabled() {
    if (this.currentIndexAcademic >= 0) {
      let result =
        this.personalDetailsForm.controls['emsTblAcademicQualification'][
          'controls'
        ][this.currentIndexAcademic].valid;
      return !result;
    } else {
      return false;
    }
  }
  isProfessionalQualificationDisabled() {
    if (this.currentIndexProfessionalQ >= 0) {
      let result =
        this.personalDetailsForm.controls['emsTblProfessionalQualification'][
          'controls'
        ][this.currentIndexProfessionalQ].valid;
      return !result;
    } else {
      return false;
    }
  }
  isWokringHistoryDisabled() {
    if (this.currentIndexWorkingHistory >= 0) {
      let result =
        this.personalDetailsForm.controls['emsTblWorkingHistory']['controls'][
          this.currentIndexWorkingHistory
        ].valid;
      return !result;
    } else {
      return false;
    }
  }
  //Current Index Setter Emergency
  setCurrentIndexEmergency(index: any) {
    this.currentIndexEmergency = index;
  }
  //Current Index Setter Academic Qualification
  setCurrentIndexAcademicQualification(index: any) {
    this.currentIndexAcademic = index;
  }
  //Current Index Setter Professional Qualification
  setCurrentIndexProfessionalQualification(index: any) {
    this.currentIndexProfessionalQ = index;
  }
  //Current Index Setter Working History
  setCurrentIndexWorkingHistory(index: any) {
    this.currentIndexWorkingHistory = index;
  }

   ///////Profile pic Upload///////
   employeePicUpload(event: any): void {
     debugger;
    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);
      // When file uploads set it to file formcontrol
      debugger;
      reader.onload = () => {
        this.profilePicUrl = reader.result;
        this.isFileChanged = reader.result ? true : false;
        this.personalDetailsForm.patchValue({
          etedPhotograph: reader.result,
        });
      };
    }
  }
  //////Working History/////
  workingHistoryUpload(event: any, i: any): void {
    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);
      // When file uploads set it to file formcontrol
      reader.onload = () => {
        if (this.currentIndexWorkingHistory >= 0) {
          this.workingHistoryUrl[i] = reader.result;
          this.isFileChanged = reader.result ? true : false;
          this.personalDetailsForm.controls['emsTblWorkingHistory']['controls'][
            i
          ].patchValue({
            etwhExperienceLetter: reader.result,
          });
        }
      };
    }
  }

  ////////// Professional Qualification////////
  professionalQualificationUpload(event: any, i: any): void {
   
    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);
      // When file uploads set it to file formcontrol
      reader.onload = () => {
        
        if (this.currentIndexProfessionalQ >= 0) {
          this.profQualificationUrl[i] = reader.result;
          this.isFileChanged = reader.result ? true : false;
          this.personalDetailsForm.controls['emsTblProfessionalQualification'][
            'controls'
          ][i].patchValue({
            etpqDocuments: reader.result,
          });
        }
      };
    }
  }

  onFileChange(event: any, i: any): void {
    
    debugger
    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);
      // When file uploads set it to file formcontrol
      reader.onload = () => {
        
        if (this.currentIndexAcademic >= 0) {
          this.imageUrl[i] = reader.result;
          this.isFileChanged = reader.result ? true : false;
          this.personalDetailsForm.controls['emsTblAcademicQualification'][
            'controls'
          ][i].patchValue({
            etaqUploadDocuments: reader.result,
          });
        }
      };
    }
  }
DownloadFile(path:any){
saveAs(path)
}

}
