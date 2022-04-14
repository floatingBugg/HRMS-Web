import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { PersonalDetailsService } from 'src/app/services/personal-details.service';
import { AddEmployeeFailureDialogComponent } from '../add-employee/add-employee-failure-dialog/add-employee-failure-dialog.component';
import { SuccessDialogComponent } from '../add-employee/success-dialog/success-dialog.component';
import { saveAs } from 'file-saver';
import { AssignManagerComponent } from '../assign-manager/assign-manager.component';
import { InventoryService } from 'src/app/services/inventory.service';
import { MatTableDataSource } from '@angular/material/table';
import { InventoryGrid } from 'src/app/_interfaces/inventoryGrid';
import { AssignAssetComponent } from '../assign-asset/assign-asset.component';
import { MatSort } from '@angular/material/sort';
import { UnassignAssetComponent } from 'src/app/modules/inventory/components/unassign-asset/unassign-asset.component';
import { employeeGrid } from 'src/app/_interfaces/employeeGrid';
import { ThemePalette } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'apFp-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss'],
})

export class EditEmployeeComponent implements OnInit {
  IsChecked!: boolean;
  isselected: boolean | undefined;
  IsIndeterminate: boolean | undefined;
  LabelAlign: string | undefined;
  IsDisabled: boolean | undefined;
  id: any;
  public assetdata: any;
  assetdatatable: any[] = [];
  assigndatatable: any[] = [];
  assetAssignObj: any = {
    itasItaAssetId: 0,
    assetName: '',
    itasItacCategoryId: 0,
    assetCatagoryName: '',
    itasQuantity: 0,
    itasAssignedDate: new Date(),
  };
  assetAssignDT: any[] = [];

  personalDetailsForm: any = FormGroup;
  emsTblAcademicQualification: any = FormArray;
  emsTblPermanentEmployee: any = FormArray;
  emsTblContractEmployee: any = FormArray;
  emsTblPartTimeEmployee: any = FormArray;
  emsTblEmployeeProfessionalDetails: any = FormArray;
  emsTblProfessionalQualification: any = FormArray;
  emsTblWorkingHistory: any = FormArray;
  emsTblEmergencyContact: any = FormArray;
  empreleaseddata: any = FormArray;
  empresigneddata: any = FormArray;
  emsTblInterneedata: any = FormArray;
  imsAssign: any = FormArray;
  permanentEmp: boolean = false;
  contractEmp: boolean = false;
  releasedEmp: boolean = false;
  validdate: any;
  resignedEmp: boolean = false;
  parttimeEmp: boolean = false;
  internshipEmp: boolean = false;
  startdateemp: any;
  endDateemp: any;
  public editDataArray: any = FormArray;
  public emsTblpermanent: any = FormArray;
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
  public password: any;
  public roleid: any;
  public role: any;
  probationDate: any;
  probationDate4: any;
  monthval: any = 3;
  Internval: any;
  daysvalue: any = 15;
  newDate: any;
  whDuration: any;
  whStartDate: any;
  whStartDates: any;
  whEndDate: any;
  diff: any;
  chkbxname: any;
  salary: any;
  completed2!: boolean;
  color: ThemePalette;
  subtasks?: Task[];
  perprobDate1: any;
  perprobDate2:any;
  perprobDate3:any;
  perprobDate4:any;
  noOfDays: any;
  imageUrl: any[] = [];
  acadImageUrl: any[] = [];
  profQualificationUrl: any[] = [];
  profQualificationName: any[] = [];
  workingHistoryUrl: any[] = [];
  workingHistoryName: any[] = [];
  profilePicUrl: any;
  isFileChanged!: boolean;
  Designation: any = [];
  Degree: any = [];
  degName!: any;
  desName!: string;
  managerid: any;
  displayedColumns: string[] = ['DesName', 'degName'];
  dasignationdDdlVal: any;
  hdvdegreeName: any;
  Id: any;
  public currentIndexEmergency: any = -1;
  public currentIndexAcademic: any = -1;
  public currentIndexProfessionalQ: any = -1;
  public currentIndexPermanentEmp: any = -1;
  public currentIndexWorkingHistory: any = -1;
  public currentIndexContractEmployee: any = -1;
  public currentIndexReleasedEmployee:any= -1;
  public currentIndexResignedEmployee:any= -1;
  public currentIndexPartTimeEmployee:any= -1;
  public currentIndexInterneeEmployee:any= -1;
  public currentIndexProfessionalDetails: any = 0;
  public employeeData: any;
  public currentIndexPermanentEmployee:any= -1;
  ///////Arrays To assign Value////////
  emergencyContact: any;
  professionalDetails: any;
  academicQualification: any;
  professionalQualification: any;
  permannetEmployee: any;
  contractEmployee: any;
  releasedEmployee: any;
  resignedEmployee: any;
  internEmployee: any;
  partTimeEmployee: any;
  assignleavestep: boolean = false;
  showAddNewDropDownField: boolean = false;
  workingHistory: any;
  userId = localStorage.getItem('loggedIn_UserId');
  userName = localStorage.getItem('loggedIn_UserName');
  displayedColumns1: string[] = [
    'assetid',
    'nameModel',
    'category',
    'quantity',
    'actions',
  ];
  Empstatus: any[] = ['stId','stname'];
  value: any;
  value1: any;
  assetEditData: any;
  whDuration1: any;
  diff2: any;
  noticeperiod: any = 1;
  internshipPrd: any = 3;
  daylist: any[] = ['Id', 'Name', 'isselected'];
  monthVal1: any=12;
  // datepipe: any;
  

  constructor(
    // this.IsChecked = false,
    // this.IsIndeterminate = false,
    // this.LabelAlign = 'after',
    // this.IsDisabled = false,
    public empDataService: PersonalDetailsService,
    private personaldetails: PersonalDetailsService,
    private inventory: InventoryService,
    public route: ActivatedRoute,
    private fb: FormBuilder,
    public dialog: MatDialog,
    public inventoryservice: InventoryService,
    public datepipe:DatePipe
  )
   
  {
    this.updateForm();

      // this.Empstatus=[
      //   {stId:1,stname:"Permanent"},
      //   {stId:2,stname:"Contract"},
      //   {stId:3,stname:"Released"},
      //   {stId:4,stname:"Resigned"},
      //   {stId:5,stname:"Part-Time"},
      //   {stId:6,stname:"Internship"},
      // ];
    
  }
  
  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id');
    this.getEmployeeAsset(this.id);
    this.getDropdownValue(1);
    this.getDropdownValue(2);
    this.empDataService.viewEmployeeData(this.id).subscribe((data) => {
      if (data.success) {
        let oneEmployeeData = data.data[0];
        let userdata = oneEmployeeData.emsTblHrmsUser;
        this.password = userdata[0].ethuPassword
        this.roleid = userdata[0].etrEthuRoleId
        if (this.roleid == 1) {
          this.role = 'Super-Admin';
        } else if (this.roleid == 2) {
          this.role = 'Admin';
        } else if (this.roleid == 3) {
          this.role = 'Team-Lead';
        } else {
          this.role = 'Employee';
        }


        console.log(oneEmployeeData);
        this.editDataArray = data.data[0];
        console.log('edit array', this.editDataArray);
        console.log('Personal Form', this.personalDetailsForm);
        this.profilePicUrl =
          this.personaldetails.apiUrl + oneEmployeeData.etedPhotograph;
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

        this.personalDetailsForm.controls['ethupassword'].setValue(
          userdata[0].ethuPassword
        );
        this.personalDetailsForm.controls['etrethuroleid'].setValue(
          this.roleid.toString()
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
        controlProfessionalDetails['etedManagerId'].setValue(
          this.professionalDetails[0]['etedManagerId']
        );
        // controlProfessionalDetails['etepdEcsStatusId'].setValue(
        // this.professionalDetails[0]['etepdEcsStatusId']
        // );
        this.empDataService.salary = this.professionalDetails[0]['etepdSalary'];

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

        // let controlPermanentEmployee =
        //   this.personalDetailsForm.controls['emsTblPermanentEmployee'][
        //   'controls'
        //   ][0]['controls'];
        //   controlPermanentEmployee['eesEmployementId'].setValue(
        //     this.permannetEmployee[0]['eesEmployementId']
        //   ); 
        // controlPermanentEmployee['eesSalary'].setValue(
        //   this.empDataService.salary
        // );
        // controlPermanentEmployee['eesStartDate'].setValue(
        //   this.permannetEmployee[0]['eesStartDate']
        // );
        // controlPermanentEmployee['eesEvaluationDate'].setValue(
        //   this.permannetEmployee[0]['eesEvaluationDate']
        // );
        // controlPermanentEmployee['eesDateOfIncrement'].setValue(
        //   this.permannetEmployee[0]['eesDateOfIncrement']
        // );
        // controlPermanentEmployee['eesDuration'].setValue(
        //   this.permannetEmployee[0]['eesDuration']
        // );
        // controlPermanentEmployee['eesIncrement'].setValue(
        //   this.permannetEmployee[0]['eesIncrement']
        // );
        // controlPermanentEmployee['eesRemarks'].setValue(
        //   this.permannetEmployee[0]['eesRemarks']
        // );

        // }
        ////////////////Contract Employee//////////////

        // this.contractEmployee = oneEmployeeData.emsTblContractEmployee;
        // for (let i = 0; i < this.contractEmployee.length; i++) {
        //   this.addContractEmp();
        //   let controlContractEmployee =
        //     this.personalDetailsForm.controls['emsTblContractEmployee']
        //     ['controls'][i]['controls'];
        //     controlContractEmployee['eesEmployementId'].setValue(
        //       this.contractEmployee[i]['eesEmployementId']
        //     );
        //   controlContractEmployee['eesStartDate'].setValue(
        //     this.contractEmployee[i]['eesStartDate']
        //   );
        //   controlContractEmployee['eesEndDate'].setValue(
        //     this.contractEmployee[i]['eesEndDate']
        //   );
        //   controlContractEmployee['eesDuration'].setValue(
        //     this.contractEmployee[i]['eesDuration']
        //   );
        //   controlContractEmployee['eesSalary'].setValue(
        //     this.empDataService.salary
        //   );
        //   controlContractEmployee['eesRemarks'].setValue(
        //     this.contractEmployee[i]['eesRemarks']
        //   );
        //   controlContractEmployee['etepdContSalary'].setValue(
        //     this.contractEmployee[i]['etepdContSalary']
        //   );
        //   controlContractEmployee['eesContractType'].setValue(
        //     this.contractEmployee[i]['eesContractType']
        //   );

        // }
        ///////////////////released Employee///////////////////
        // let controlReleasedEmployee =
        //   this.personalDetailsForm.controls['empreleaseddata'][
        //   'controls'
        //   ][0]['controls'];
        //   // controlReleasedEmployee['eesEmployementId'].setValue(
        //   //   this.releasedEmployee[0]['eesEmployementId']
        //   // );
        // controlReleasedEmployee['eesStartDate'].setValue(
        //   this.releasedEmployee[0]['eesStartDate']
        // );
        // controlReleasedEmployee['eesEndDate'].setValue(
        //   this.releasedEmployee[0]['eesEndDate']
        // );
        // controlReleasedEmployee['eesClearenceDate'].setValue(
        //   this.releasedEmployee[0]['eesClearenceDate']
        // );
        // controlReleasedEmployee['eesDuration'].setValue(
        //   this.releasedEmployee[0]['eesDuration']
        // );
        // controlReleasedEmployee['eesRemarks'].setValue(
        //   this.releasedEmployee[0]['eesRemarks']
        // );

        //////Employee resigned///////////////
        // let controlResignedEmployee =
        //   this.personalDetailsForm.controls['empresigneddata'][
        //   'controls'
        //   ][0]['controls'];
        // controlResignedEmployee['eesStartDate'].setValue(
        //   this.resignedEmployee[0]['eesStartDate']
        // );
        // controlResignedEmployee['eesReleasingDate'].setValue(
        //   this.resignedEmployee[0]['eesReleasingDate']
        // );
        // controlResignedEmployee['eesClearenceDate'].setValue(
        //   this.resignedEmployee[0]['eesClearenceDate']
        // );
        // controlResignedEmployee['eesDuration'].setValue(
        //   this.resignedEmployee[0]['eesDuration']
        // );
        // controlResignedEmployee['eesRemarks'].setValue(
        //   this.resignedEmployee[0]['eesRemarks']
        // );
        ////////////////////Part Time/////////////
        // let controlPartTimeEmployee =
        //   this.personalDetailsForm.controls['emsTblPartTimeEmployee'][
        //   'controls'
        //   ][0]['controls'];
        //   // controlReleasedEmployee['eesEmployementId'].setValue(
        //   //   this.releasedEmployee[0]['eesEmployementId']
        //   // );
        // controlPartTimeEmployee['eesetedpartTimetype'].setValue(
        //   this.partTimeEmployee[0]['eesetedpartTimetype']
        // );
        // controlPartTimeEmployee['monday'].setValue(
        //   this.partTimeEmployee[0]['monday']
        // );
        // controlPartTimeEmployee['tuesday'].setValue(
        //   this.partTimeEmployee[0]['tuesday']
        // );
        // controlPartTimeEmployee['wednesday'].setValue(
        //   this.partTimeEmployee[0]['wednesday']
        // );
        // controlPartTimeEmployee['thrusday'].setValue(
        //   this.partTimeEmployee[0]['thrusday']
        // );
        // controlPartTimeEmployee['friday'].setValue(
        //   this.partTimeEmployee[0]['friday']
        // );

        ///////////////Internee employee////////
        // let controlInterneeEmployee =
        //   this.personalDetailsForm.controls['emsTblInterneedata'][
        //   'controls'
        //   ][0]['controls'];
        //   // controlReleasedEmployee['eesEmployementId'].setValue(
        //   //   this.releasedEmployee[0]['eesEmployementId']
        //   // );
        //   controlInterneeEmployee['eesStartDate'].setValue(
        //   this.internEmployee[0]['eesStartDate']
        // );
        // controlInterneeEmployee['eesDuration'].setValue(
        //   this.internEmployee[0]['eesDuration']
        // );
        // controlInterneeEmployee['eesEndDate'].setValue(
        //   this.internEmployee[0]['eesEndDate']
        // );
        // controlInterneeEmployee['eesSalary'].setValue(
        //   this.empDataService.salary
        // );
        // controlInterneeEmployee['eesRemarks'].setValue(
        //   this.internEmployee[0]['eesRemarks']
        // ); 

        ////////////////////////////////////
        // this.professionalQualification =
        //   oneEmployeeData.emsTblProfessionalQualification;
        // for (let i = 0; i < this.professionalQualification.length; i++) {
        //   if (
        //     this.professionalQualification[i].etpqDocuments != '' &&
        //     this.professionalQualification[i].etpqDocuments != null
        //   ) {
        //     this.profQualificationUrl[i] =
        //       this.personaldetails.apiUrl +
        //       this.professionalQualification[i].etpqDocuments;
        //     let splitedPath = this.imageUrl[i].split('/');
        //     let fileName = splitedPath[splitedPath.length - 1];
        //     this.profQualificationName[i] = fileName;
        //   } else {
        //     this.profQualificationUrl[i] = null;
        //   }
        //   this.addProfessionalQualification();
        //   let controlProfessionalQualification =
        //     this.personalDetailsForm.controls[
        //     'emsTblProfessionalQualification'
        //     ]['controls'][i]['controls'];

        //   controlProfessionalQualification['etpqCertification'].setValue(
        //     this.professionalQualification[i]['etpqCertification']
        //   );
        //   controlProfessionalQualification['etpqStratDate'].setValue(
        //     this.professionalQualification[i]['etpqStratDate']
        //   );
        //   controlProfessionalQualification['etpqEndDate'].setValue(
        //     this.professionalQualification[i]['etpqEndDate']
        //   );
        //   controlProfessionalQualification['etpqInstituteName'].setValue(
        //     this.professionalQualification[i]['etpqInstituteName']
        //   );
        //   controlProfessionalQualification['etpqPqId'].setValue(
        //     this.professionalQualification[i]['etpqPqId']
        //   );
        // }


        /////Academic Qualification //////
        this.academicQualification =
          oneEmployeeData.emsTblAcademicQualification;
        for (let i = 0; i < this.academicQualification.length; i++) {
          if (
            this.academicQualification[i].etaqUploadDocuments != '' &&
            this.academicQualification[i].etaqUploadDocuments != null
          ) {
            this.imageUrl[i] =
              this.personaldetails.apiUrl +
              this.academicQualification[i].etaqUploadDocuments;
            let splitedPath = this.imageUrl[i].split('/');
            let fileName = splitedPath[splitedPath.length - 1];
            this.acadImageUrl[i] = fileName;
          } else {
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
          if (
            this.professionalQualification[i].etpqDocuments != '' &&
            this.professionalQualification[i].etpqDocuments != null
          ) {
            this.profQualificationUrl[i] =
              this.personaldetails.apiUrl +
              this.professionalQualification[i].etpqDocuments;
            let splitedPath = this.imageUrl[i].split('/');
            let fileName = splitedPath[splitedPath.length - 1];
            this.profQualificationName[i] = fileName;
          } else {
            this.profQualificationUrl[i] = null;
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
          if (
            this.workingHistory[i].etwhExperienceLetter != '' &&
            this.workingHistory[i].etwhExperienceLetter != null
          ) {
            this.workingHistoryUrl[i] =
              this.personaldetails.apiUrl +
              this.workingHistory[i].etwhExperienceLetter;
            let splitedPath = this.workingHistoryUrl[i].split('/');
            let fileName = splitedPath[splitedPath.length - 1];
            this.workingHistoryName[i] = fileName;
          } else {
            this.workingHistoryUrl[i] = null;
          }
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
  
    // /////////employe status//////////
  }
  
  getdays() {
    this.daylist = [
      { id: 1, Name: "Monday", isselected: false },
      { id: 2, Name: "Tuesday", isselected: false },
      { id: 3, Name: "Wednesday", isselected: false },
      { id: 4, Name: "Thursday", isselected: false },
      { id: 5, Name: "Friday", isselected: false },
    ]
  }
  onchange2() {
    console.log(this.daylist);
  }
  getEmployeeData() {
    this.empDataService.getEmployeeData().subscribe((data: any) => {
      this.employeeData = new MatTableDataSource<employeeGrid>(data.data);


    });
  }
  Assignleave(event: any) {
    console.log(event);
    if (event.value == 'Active') {
      this.assignleavestep = true;
    } else {
      this.assignleavestep = false;
    }
  }
  showField() {
    this.showAddNewDropDownField = true;
  }

  pushValue(event: any, dropdownid: number) {
    this.showAddNewDropDownField = false;
    this.dasignationdDdlVal = event.value;

    var obj = {
      hdvHdDropdownId: dropdownid,
      hdvValueName: this.dasignationdDdlVal,
      // HdvCreatedBy:this.userId,
      // HdvCreatedByName:this.userName,
    };
    this.personaldetails.addDropdownValue(obj).subscribe((res: any) => {
      if (res.success == true) {
        this.getDropdownValue(dropdownid);
      }
    });
  }

  /////////////Released//////////////
  addempreleaseddata(): FormGroup {
    return this.fb.group({
      eesEmployementId:[0],
      eesStartDate: [null, Validators.required],
      eesEndDate: [null, Validators.required],
      eesDuration: [null],
      eesClearenceDate: [null],
      eesRemarks: [null],

    });
  }

  addrelempdata(): void {
    this.empreleaseddata = this.personalDetailsForm.get(
      'empreleaseddata'
    ) as FormArray;
    this.empreleaseddata.push(this.addempreleaseddata());
  }
  /////////////Resigned employee/////////////////
  addempresigneddata(): FormGroup {
    return this.fb.group({
      // eesEmployementId:[0],
      eesStartDate: [null, Validators.required],
      eesDuration: [null],
      eesReleasingDate: [null],
      eesClearenceDate: [null],
      eesRemarks: [null],

    });
  }

  addresignempdata(): void {
    this.empresigneddata = this.personalDetailsForm.get(
      'empresigneddata'
    ) as FormArray;
    this.empresigneddata.push(this.addempresigneddata());
  }
  Resignednoticeperiod(index: any) {

    let control = this.personalDetailsForm.get(
      'empresigneddata'
    )['controls'][index]['controls'];
    let pdjoinDate = control['eesStartDate'].value;
    let d = new Date(pdjoinDate);
    this.noticeperiod = (<HTMLInputElement>(
      document.getElementById('noticeperiod')
    )).value;
    let probationDate = d.setMonth(d.getMonth() + parseInt(this.noticeperiod));
    this.newDate = new Date(probationDate);
    this.probationDate = new Intl.DateTimeFormat('en-GB', {
      dateStyle: 'short',
    }).format(this.newDate); control
    ['eesReleasingDate'].setValue(this.probationDate);
  }

  resignclearancedate(index: any) {
    debugger
    index = 0;
    let control = this.personalDetailsForm.get('empresigneddata')[
      'controls'
    ][index]['controls'];
    let pdjoinDate2 = control['eesReleasingDate'].value;
    let d = new Date(pdjoinDate2);
    let probationDate = (d.setDate(d.getDate())+15);
    this.newDate = new Date(probationDate);
    var probationDate2 = new Intl.DateTimeFormat('en-GB', {
      dateStyle: 'short',
    }).format(this.newDate);
    control['eesClearenceDate'].setValue(probationDate2);
  }
  //////////////////////
  // releasedclearancedate(index: any = 0) {
  //   let control = this.personalDetailsForm.get('empreleaseddata')[
  //     'controls'
  //   ][index]['controls'];

  //   let pdjoinDate1 = control['eesEndDate'].value;
  //   let d = new Date(pdjoinDate1);
  //   let probationDate = d.setDate(d.getDate() + 15);
  //   this.newDate = new Date(probationDate);
  //   this.probationDate = new Intl.DateTimeFormat('en-GB', {
  //     dateStyle: 'short',
  //   }).format(this.newDate);
  //   control['eesClearenceDate'].setValue(this.probationDate);
  // }

  //////////////// Internship /////////////////

  addInternddata(): FormGroup {
    return this.fb.group({
      // eesEmployementId:[0],
      eesStartDate: [null, Validators.required],
      eesDuration: [null],
      eesClearanceDate: [null],
      eesSalary: [0, Validators.required],
      eesRemarks: [null, Validators.required]
    });
  }


  addinterneeedata(): void {
    this.emsTblInterneedata = this.personalDetailsForm.get(
      'emsTblInterneedata'
    ) as FormArray;
    this.emsTblInterneedata.push(this.addInternddata());
  }
  
  getJoiningDate3(index: any) {
    let control = this.personalDetailsForm.get(
      'emsTblInterneedata'
    )['controls'][index]['controls'];
    let pdjoinDate = control['eesStartDate'].value;
    let d = new Date(pdjoinDate);
    this.Internval = (<HTMLInputElement>(
      document.getElementById('Internval')
    )).value;
    let probationDate4 = d.setMonth(d.getMonth() + parseInt(this.Internval));
    this.newDate = new Date(probationDate4);
    this.probationDate4 = new Intl.DateTimeFormat('en-GB', {
      dateStyle: 'short',
    }).format(this.newDate); control
    ['eesClearanceDate'].setValue(this.probationDate4);
  }

  getDropdownValue(id: number) {
    this.Id = id;
    if (this.Id == 1) {
      this.personaldetails.getDropdownValue(this.Id).subscribe((res: any) => {
        this.value = res.data;
      });
    } else if (this.Id == 2) {
      this.personaldetails.getDropdownValue(this.Id).subscribe((res: any) => {
        this.value1 = res.data;
      });
    }
  }


  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '80%';
    this.dialog.open(AssignManagerComponent);

    this.dialog.afterAllClosed.subscribe((res: any) => {
      this.getmanagerid();
    });
  }

  getmanagerid() {
    this.managerid = this.personaldetails.managerId;
    let controlProfessionalDetails =
      this.personalDetailsForm.controls['emsTblEmployeeProfessionalDetails'][
      'controls'
      ][0]['controls'];
    controlProfessionalDetails['etedManagerId'].setValue(this.managerid);
    this.personalDetailsForm.controls['etedManagerId'].setValue(this.managerid);
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
////////////////dropdown/////////


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
      etepdPdId: [0, Validators.required],
      etepdSalary: [0, Validators.required],
      etepdProbation: [this.newDate, Validators.required],
      etepdDesignation: ['', Validators.required],
      etepdJoiningDate: [null, Validators.required],
      etedManagerId: [null],
      etepdEcsStatusId: [0]
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
      etpqCertification: [''],
      etpqStratDate: [null],
      etpqEndDate: [null],
      etpqInstituteName: [''],
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
      etrethuroleid: ['', Validators.required],
      ethupassword: ['', Validators.required],
      etedNationality: ['', Validators.required],
      etedManagerId: [],
      emsTblEmergencyContact: this.fb.array([]),
      emsTblAcademicQualification: this.fb.array([]),
      emsTblEmployeeProfessionalDetails: this.fb.array([
        this.addEmsTblEmployeeProfessionalDetails(),
      ]),
      emsTblProfessionalQualification: this.fb.array([]),
      emsTblWorkingHistory: this.fb.array([]),
      imsAssign: this.fb.array([]),
      etedModifiedBy: [this.userId],
      etedModifiedByName: [this.userName],
      emsTblPermanentEmployee: this.fb.array([this.addemsTblPermanentEmployee(),]),
      emsTblContractEmployee: this.fb.array([this.addemsTblContractEmployee(),]),
      empreleaseddata: this.fb.array([this.addempreleaseddata()]),
      empresigneddata: this.fb.array([this.addempresigneddata()]),
      emsTblInterneedata: this.fb.array([this.addInternddata()]),
      emsTblPartTimeEmployee: this.fb.array([this.addemsTblPartTimeEmployee()])

    });
  }

  updateData() {
    debugger
    let form = this.personalDetailsForm.value;
    this.assetAssignDT.forEach((elem: any, index: any) => {
      form.imsAssign[index] = elem;
    });
    console.log(form.imsAssign);
    console.log(this.assetAssignDT);
    this.empDataService.salary = this.personalDetailsForm.value;
    console.log(this.personalDetailsForm.value)

  let parttimedetails = [];
    if(this.personalDetailsForm.controls.emsTblPartTimeEmployee.controls[0].controls['monday'].value){
      parttimedetails.push("1");
    }
    else if (this.personalDetailsForm.controls.emsTblPartTimeEmployee.controls[0].controls['tuesday'].value){
      
      parttimedetails.push("2");
    }
    else if (this.personalDetailsForm.controls.emsTblPartTimeEmployee.controls[0].controls['wednesday'].value){
      
      parttimedetails.push("3");
    }
    else if (this.personalDetailsForm.controls.emsTblPartTimeEmployee.controls[0].controls['thrusday'].value){
      
      parttimedetails.push("4");
    }
    else(this.personalDetailsForm.controls.emsTblPartTimeEmployee.controls[0].controls['friday'].value);{
      
      parttimedetails.push("5");
    }
    this.personalDetailsForm.controls.emsTblPartTimeEmployee.controls[0].controls['eesDays'].setValue(parttimedetails.join(','));
    this.personaldetails.updateEmployeeData(this.personalDetailsForm.value).subscribe((result) => {
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

  

  ///////////Compare dates and Duration Calculator generic///////////////////
  ////////////////////////////////////////////////////////////////////////////  
  compareDatesGeneric(index: any, formName: any, sartDateControl: any, endDateControl: any, durationControl: any) {
    let control = this.personalDetailsForm.get(formName)[
      'controls'
    ][index]['controls'];
    this.whStartDate = control[sartDateControl].value;
    this.whEndDate = control[endDateControl].value;
    console.log(this.whStartDate);
    console.log(this.whEndDate);
    let start: any = new Date(this.whStartDate);
    let end: any = new Date(this.whEndDate);
    this.diff = end - start;
    let msInDay = 1000 * 3600 * 24;
    this.noOfDays = this.diff / msInDay;
    console.log('new Date ', this.diff / msInDay);

    if (this.whStartDate != null && this.whEndDate != null) {
      this.getDurationGeneric(index, formName, durationControl);
    }
  }
  getDurationGeneric(index: any, formName: any, durationControl: any) {
    let control = this.personalDetailsForm.get(formName)[
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
    control[durationControl].setValue(this.whDuration);
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
  isContractEmployeeDisabled() {
    if (this.currentIndexContractEmployee >= 0) {
      let result = this.personalDetailsForm.controls['emsTblContractEmployee']['controls']
      [0].valid;
      return !result;
    } else {
      return false;
    }
  }
  isReleasedEmployeeDisabled(){
    if(this.currentIndexReleasedEmployee >= 0){
      let result=
      this.personalDetailsForm.controls['empreleaseddata'][
        'controls'
      ][0].valid;
    return !result;
  } else {
    return false;
    }
  }
  isResignedEmployeeDisabled(){
    if(this.currentIndexResignedEmployee >= 0){
      let result=
      this.personalDetailsForm.controls['empresigneddata'][
        'controls'
      ][0].valid;
    return !result;
  } else {
    return false;
    }
  }
  isPartTimeEmployeeDisabled(){
    if(this.currentIndexPartTimeEmployee >= 0){
      let result=
      this.personalDetailsForm.controls['emsTblPartTimeEmployee'][
        'controls'
      ][0].valid;
    return !result;
  } else {
    return false;
    }
  }
  isInterneeEmployeeDisabled(){
    if(this.currentIndexPartTimeEmployee >= 0){
      let result=
      this.personalDetailsForm.controls['emsTblInterneedata'][
        'controls'
      ][0].valid;
    return !result;
  } else {
    return false;
    }
  }

  isPermanentEmployeeDisabled() {
    if (this.currentIndexPermanentEmp >= 0) {
      let result =
        this.personalDetailsForm.controls['emsTblPermanentEmployee'][
          'controls'
        ][0].valid;
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
  setCurrentIndexPermannetEmployee(index: any) {
    this.currentIndexPermanentEmployee = index;
  }
  //Current Index Setter Working History
  setCurrentIndexWorkingHistory(index: any) {
    this.currentIndexWorkingHistory = index;
  }
  //Current Index Setter Contract employee///
  setCurrentIndexContractEmployee(index: any) {
    this.currentIndexContractEmployee = index;
  }
  //Current Index Setter Released employee///
  setCurrentIndexReleasedEmployee(index: any){
    this.currentIndexReleasedEmployee = index;
  }
  //Current Index Setter Resigned employee///
  setCurrentIndexResignedEmployee(index: any){
    this.currentIndexResignedEmployee = index;
  }
  //Current Index Setter PartTime employee///
  setCurrentIndexParttimeEmployee(index: any){
    this.currentIndexPartTimeEmployee= index;
  }
  //Current Index Setter Internee employee///
  setCurrentIndexInterneeEmployee(index: any){
    this.currentIndexInterneeEmployee= index;
  }

  ///////Profile pic Upload///////
  employeePicUpload(event: any): void {
    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);
      // When file uploads set it to file formcontrol

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
  getEmployeeAsset(empID: any) {
    this.inventory.getAllAssetAssingedbyEmpID(empID).subscribe((data: any) => {
      if (data.success) {
        this.assetEditData = data.data;
        this.assetdata = new MatTableDataSource<InventoryGrid>(this.assetEditData);
      }
    });
  }
  onCreateAssign() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '80%';
    let dialogRef = this.dialog.open(AssignAssetComponent);

    dialogRef.afterClosed().subscribe((res: any) => {
      this.tempTable();
    });
  }

  tempTable() {
    ;
    this.assetAssignDT = [];
    this.assetAssignDT = this.assetEditData;
    this.inventory.assetObj.forEach((elem: any, index: any) => {
      this.assetAssignObj = elem;

      this.assetAssignObj.itasItaAssetId = elem.assetid;
      this.assetAssignObj.assetName = elem.assetname;
      this.assetAssignObj.itasItacCategoryId = elem.categoryid;
      this.assetAssignObj.assetCatagoryName = elem.category;
      this.assetAssignObj.itasQuantity = this.inventory.assignObj[index].itasQuantity;
      this.assetAssignObj.itasAssignedDate = this.inventory.assignObj[index].itasAssignedDate;
      //assetAssignObj.itasCreatedBy =

      let imsAssign = (this.personalDetailsForm.controls['imsAssign'][
        'controls'
      ][index] = this.addAssetAssignList());

      imsAssign.controls['itasItaAssetId'].setValue(
        this.assetAssignObj.itasItaAssetId
      );
      imsAssign.controls['assetName'].setValue(this.assetAssignObj.assetName);

      this.personalDetailsForm.controls['imsAssign']['controls'][
        index
      ].patchValue(imsAssign);
    });
    this.assetAssignDT.push(this.assetAssignObj);
    this.assetdata = new MatTableDataSource<InventoryGrid>(this.assetAssignDT);


    // this.addAssetAssignList().setValue(this.assetAssignDT);
    // this.addImsAssign();
    //this.assetData=new MatTableDataSource<InventoryGrid>(this.inventory.assetObj);
  }


  addImsAssign(): void {
    this.imsAssign = this.personalDetailsForm.get('imsAssign') as FormArray;
    let assignForm = this.addAssetAssignList();
    this.imsAssign.push(this.addAssetAssignList());
  }

  addAssetAssignList(): FormGroup {
    return this.fb.group({
      itasItaAssetId: [''],
      assetName: [''],
      itasItacCategoryId: [''],
      assetCatagoryName: [''],
      itasQuantity: [''],
      itasAssignedDate: [''],
      itasCreatedBy: [this.userId],
      itasCreatedByName: [this.userName],
    });
  }
  permanentEmpstatus(event: any) {

    console.log(event);
    if (event.value == 1) {
      this.permanentEmp = true;
      this.personalDetailsForm.ems
    } else {
      this.permanentEmp = false;
    }
    if (event.value == 2) {
      this.contractEmp = true;
    } else {
      this.contractEmp = false;
    }
    if (event.value == 3) {
      this.releasedEmp = true;
    } else {
      this.releasedEmp = false;
    }
    if (event.value == 4) {
      this.resignedEmp = true;
    } else {
      this.resignedEmp = false;
    }
     if (event.value == 5) {
      this.parttimeEmp = true;
    } else {
      this.parttimeEmp = false;
    }
    if (event.value == 6) {
      this.internshipEmp = true;
    } else {
      this.internshipEmp = false;
    }


  }
  //////Permanent Employee array/////
  addemsTblPermanentEmployee(): FormGroup {
    return this.fb.group({
      // eesEmployementId:[0],
      eesStartDate: [null, Validators.required],
      eesEvaluationDate: [null,Validators.required],
      eesDateOfIncrement: [null,Validators.required],
      eesIncrement: [0,Validators.required],
      eesRemarks: [null],
      eesSalary: [0]
    })
  }
  ///////////////Released Employee Duration Cal//////////////
  onKeypressEvent(event: any, i: any) {
    this.startdateemp = event.target.value;
    console.log(this.startdateemp);
  }
  onKeypressEvent2(event: any, i: any) {
    this.endDateemp = event.target.value;
    console.log(this.endDateemp);
  }
  releasedclearancedate(index: any = 0) {
    let control = this.personalDetailsForm.get('empreleaseddata')[
      'controls'
    ][index]['controls'];

    let pdjoinDate1 = control['eesEndDate'].value;
    let d = new Date(pdjoinDate1);
    let probationDate = d.setDate(d.getDate() + 15);
    this.newDate = new Date(probationDate);
    this.probationDate = new Intl.DateTimeFormat('en-GB', {
      dateStyle: 'short',
    }).format(this.newDate);
    control['eesClearenceDate'].setValue(this.probationDate);
  }

  //////////////add permanent employee/////
  addPerEmp(): void {
    this.emsTblPermanentEmployee = this.personalDetailsForm.get(
      'emsTblPermanentEmployee'
    ) as FormArray;
    this.emsTblPermanentEmployee.push(this.addemsTblPermanentEmployee());
  }
  // perprobDatej!:Date
  getPerDate(index: any) {
    let control = this.personalDetailsForm.get(
      'emsTblPermanentEmployee'
    )['controls'][index]['controls'];
    let pdjoinDate = control['eesStartDate'].value;
    let d = new Date(pdjoinDate);
    this.monthval = (<HTMLInputElement>(
      document.getElementById('monthVal1')
    )).value;
    let perprobDate1 = d.setMonth(d.getMonth() + parseInt(this.monthVal1));
    this.newDate = new Date(perprobDate1);
    this.perprobDate1 = new Intl.DateTimeFormat('en-GB', {
      dateStyle: 'short',
    }).format(this.newDate); 
    control = this.personalDetailsForm.get(
      'emsTblPermanentEmployee'
    )['controls'][0]['controls'];
    control['eesDateOfIncrement'].setValue(this.newDate)
    // let enddate =this.datepipe.transform(this.perprobDate1, 'MM/dd/yyyy');
    // control['eesEvaluationDate'].setValue(enddate);
    // this.perprobDate1= enddate
    // console.log(control)
  }
  ///////////////change date///////////
  setDate(event: any) {
    let control = this.personalDetailsForm.get(
      'emsTblPermanentEmployee'
    )['controls'][0]['controls'];
    control['eesDateOfIncrement'].setValue(new Date(event))
  }

  ///////////////////////////PartTime///////////////////
  addPartTime() {
    this.emsTblPartTimeEmployee = this, this.personalDetailsForm.get(
      'emsTblPartTimeEmployee'
    ) as FormArray;
    this.emsTblPartTimeEmployee.push(this.addemsTblPartTimeEmployee());
  }
  ////////////part Time employee///////////////
  addemsTblPartTimeEmployee(): FormGroup {
    return this.fb.group({
      // eesEmployementId:[0],
      eesetedpartTimetype: [null, Validators.required],
      monday: [0,null ],
      tuesday: [0, null],
      wednesday: [0,null ],
      thrusday: [0, null],
      friday: [0, null],
      eesDays:['']

    })
  }
  //////////Contract Employee//////////
  addemsTblContractEmployee(): FormGroup {
    return this.fb.group({
      // eesEmployementId:[0],
      eesStartDate: [null, Validators.required],
      eesEndDate: [null, Validators.required],
      eesDuration: [null, Validators.required],
      eesSalary: [0],
      eesRemarks: [null],
      eesContractType: [0]
    })
  }
  //////////value pushing Contract///////
  addContractEmp(): void {
    this.emsTblContractEmployee = this.personalDetailsForm.get(
      'emsTblContractEmployee'
    ) as FormArray;
    this.emsTblContractEmployee.push(this.addemsTblContractEmployee());
  }
  //////////////////////////////////////////
  unAssignAssetById(itasItaAssetId: any) {

    const dialogRef = this.dialog.open(UnassignAssetComponent);

    dialogRef.afterClosed().subscribe((res: any) => {

      if (res == true) {



        let objToRemove = this.inventory.assetObj.find((x: any) => x.assetid == itasItaAssetId);

        this.inventory.assetObj.splice(this.inventory.assetObj.indexOf(objToRemove), 1);

        this.tempTable();


      }
    });
  }

  DownloadFile(path: any) {
    saveAs(path);
  }
  
}
