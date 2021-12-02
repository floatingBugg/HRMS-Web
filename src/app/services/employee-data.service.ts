import { Injectable } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
  FormArray,
  FormsModule,
} from '@angular/forms';
import { PersonalDetailsService } from './personal-details.service';
import { AcademicForm } from '../modules/dashboard/components/add-employee/academic-form.model';
@Injectable({
  providedIn: 'root',
})
export class EmployeeDataService {
  academicQualificationArray = new FormArray([new FormControl('')]);
  addAcademicForm() {
    this.academicQualificationArray.push(new FormControl(''));
  }
  removeAcademicForm(idx: number) {
    this.academicQualificationArray.removeAt(idx);
  }

  personalDetailsForm = new FormGroup({
    etedFirstName: new FormControl('', Validators.required),
    etedLastName: new FormControl('', Validators.required),
    etedEmailAddress: new FormControl('', Validators.required),
    etedOfficialEmailAddress: new FormControl('', Validators.required),
    etedCnic: new FormControl('', Validators.required),
    etedDob: new FormControl('', Validators.required),
    etedContactNumber: new FormControl('', Validators.required),
    etedAddress: new FormControl('', Validators.required),
    etedGender: new FormControl('', Validators.required),
    etedMaritalStatus: new FormControl('', Validators.required),
    etedBloodGroup: new FormControl('', Validators.required),
    etedReligion: new FormControl('', Validators.required),
    etedNationality: new FormControl('', Validators.required),
    etedStatus: new FormControl('', Validators.required),
    etecFirstName: new FormControl('', Validators.required),
    etecLastName: new FormControl('', Validators.required),
    etecRelation: new FormControl('', Validators.required),
    etecContactNumber: new FormControl('', Validators.required),
    etecAddress: new FormControl('', Validators.required),

    etaqQualification: new FormControl(''),
    etaqPassingYear: new FormControl(''),
    etaqCgpa: new FormControl(''),
    etaqInstituteName: new FormControl(''),

    etpqCertification: new FormControl(''),
    etepdSalary: new FormControl(''),
    etepdProbation: new FormControl(''),
    etepdDesignation: new FormControl(''),
    etepdJoiningDate: new FormControl(''),
    etpqStratDate: new FormControl(''),
    etpqEndDate: new FormControl(''),
    etpqInstituteName: new FormControl(''),
    etwhCompanyName: new FormControl(''),
    etwhDesignation: new FormControl(''),
    etwhStratDate: new FormControl(''),
    etwhEndDate: new FormControl(''),
    etwhDuration: new FormControl(''),
  });
  updateDetailsForm = new FormGroup({
    empID: new FormControl(''),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    personalemail: new FormControl(''),
    officialemail: new FormControl(''),
    cnic: new FormControl(''),
    dob: new FormControl(''),
    contact: new FormControl(''),
    address: new FormControl(''),
    gender: new FormControl(''),
    maritalstatus: new FormControl(''),
    bloodgroup: new FormControl(''),
    religion: new FormControl(''),
    nationality: new FormControl(''),
    empstatus: new FormControl(''),
    emergencyfirstname: new FormControl(''),
    emergencylastname: new FormControl(''),
    emergencyrelation: new FormControl(''),
    emergencycontact: new FormControl(''),
    emergencyaddress: new FormControl(''),
  });

  constructor(
    private personaldetails: PersonalDetailsService,
    private fb: FormBuilder
  ) {
    // this.checkLocalstorage();
  }

  AcademicForm = new AcademicForm();
  ngOnInit() {}

  // checkLocalstorage() {
  //   let formData = localStorage.getItem('formData');
  //   if (formData) {
  //     this.personalDetailsForm.patchValue(JSON.parse(formData));
  //   }
  // }
  submitData() {
    console.log(this.personalDetailsForm.value);
    this.personaldetails
      .personalDetails(this.personalDetailsForm.value)
      .subscribe((result) => {
        console.log(result.message);
      });
  //   // localStorage.setItem(
  //   //   'formData',
  //   //   JSON.stringify(this.personalDetailsForm.value)
  //   // );
  //   // console.log(localStorage.getItem('formData'));
  //   // this.updateDetailsForm.setValue({
  //   //   empID: this.personalDetailsForm.controls['empID'].value,
  //   //   firstname: this.personalDetailsForm.controls['firstname'].value,
  //   //   lastname: this.personalDetailsForm.controls['lastname'].value,
  //   //   personalemail: this.personalDetailsForm.controls['personalemail'].value,
  //   //   officialemail: this.personalDetailsForm.controls['officialemail'].value,
  //   //   cnic: this.personalDetailsForm.controls['cnic'].value,
  //   //   dob: this.personalDetailsForm.controls['dob'].value,
  //   //   contact: this.personalDetailsForm.controls['contact'].value,
  //   //   address: this.personalDetailsForm.controls['address'].value,
  //   //   gender: this.personalDetailsForm.controls['gender'].value,
  //   //   maritalstatus: this.personalDetailsForm.controls['maritalstatus'].value,
  //   //   bloodgroup: this.personalDetailsForm.controls['bloodgroup'].value,
  //   //   religion: this.personalDetailsForm.controls['religion'].value,
  //   //   nationality: this.personalDetailsForm.controls['nationality'].value,
  //   //   empstatus: this.personalDetailsForm.controls['empstatus'].value,
  //   //   emergencyfirstname:
  //   //     this.personalDetailsForm.controls['emergencyfirstname'].value,
  //   //   emergencylastname:
  //   //     this.personalDetailsForm.controls['emergencylastname'].value,
  //   //   emergencyrelation:
  //   //     this.personalDetailsForm.controls['emergencyrelation'].value,
  //   //   emergencycontact:
  //   //     this.personalDetailsForm.controls['emergencycontact'].value,
  //   //   emergencyaddress:
  //   //     this.personalDetailsForm.controls['emergencyaddress'].value,
  //   // });
  }

  // addForm() {
  //   this.AcademicForm = new AcademicForm();
  //   this.dataarray.push(this.AcademicForm);
  // }
  // removeForm(index: any) {
  //   this.dataarray.splice(index);
  // }

  getData() {}
}
