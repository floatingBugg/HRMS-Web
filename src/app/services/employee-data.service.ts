import { Injectable } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
  FormArray,
  FormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { PersonalDetailsService } from './personal-details.service';
import { AcademicForm } from '../modules/dashboard/components/add-employee/academic-form.model';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class EmployeeDataService {
 
  constructor(
    private personalDetails: PersonalDetailsService,
    private fb: FormBuilder,
    private router: Router
  ) {}
  ngOnInit() {}

 
  // onEditClicked(row: any) {
  //   this._rowSource.next(row);
  //   console.log(this._rowSource);
  //   this.personalDetails.viewEmployeeData(row.empID).subscribe((data: any) => {
  //     let oneEmployeeData = data.data;
  //     console.log(oneEmployeeData);

  //     this.empID = oneEmployeeData[0].etedEmployeeId;
  //     this.firstName = oneEmployeeData[0].etedFirstName;
  //     this.lastname = oneEmployeeData[0].etedLastName;
  //     this.phoneNo = oneEmployeeData[0].etedContactNumber;
  //     this.cnic = oneEmployeeData[0].etedCnic;
  //     this.personalEmail = oneEmployeeData[0].etedEmailAddress;
  //     this.professionalEmail = oneEmployeeData[0].etedOfficialEmailAddress;
  //     this.address = oneEmployeeData[0].etedAddress;
  //     this.dob = oneEmployeeData[0].etedDob;
  //     this.gender = oneEmployeeData[0].etedGender;
  //     this.maritalStatus = oneEmployeeData[0].etedMaritalStatus;
  //     this.employementStatus = oneEmployeeData[0].etedStatus;
  //     this.bloodGroup = oneEmployeeData[0].etedBloodGroup;
  //     this.religion = oneEmployeeData[0].etedReligion;
  //     this.nationality = oneEmployeeData[0].etedNationality;
  //     //////Emergency Contact /////
  //     this.emergencyContact =
  //       oneEmployeeData[0].emsTblEmergencyContact;
  //     //////// Professional Details//////
  //     this.profDetails =
  //       oneEmployeeData[0].emsTblEmployeeProfessionalDetails;
  //     /////// Academic Qualification/////////
  //     this.academicQualification =
  //       oneEmployeeData[0].emsTblAcademicQualification;
  //     //////// Professional Qualification///////
  //     this.profQualification =
  //       oneEmployeeData[0].emsTblProfessionalQualification;
  //     //////Working History/////////
  //     this.workHistory = oneEmployeeData[0].emsTblWorkingHistory;

  //     this.router.navigate(['/dashboard/editemployee']);
  //   });
  // }
}
