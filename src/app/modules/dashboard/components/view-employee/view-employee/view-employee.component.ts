import { EmployeeDataService } from '../../../../../services/employee-data.service';
import { Component, OnInit } from '@angular/core';
import { PersonalDetailsService } from 'src/app/services/personal-details.service';
import { ActivatedRoute } from '@angular/router';
import { saveAs } from 'file-saver';
import { PermissionsService } from 'src/app/services/permissionsService/permissions.service';
@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.scss'],
})
export class ViewEmployeeComponent implements OnInit {
  public etedPhotograph: any;
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
  public apiURL = this.personalDetailService.apiUrl;
  public workHistoryName : any[] = [];
  public profQualName : any[] = [];
  public Acadname : any[] = [];
  profilePicUrl: any;
  //////Emergency Contact /////
  public emergencyContact = [
    {
      etecFirstName: '',
      etecLastName: '',
      etecRelation: '',
      etecContactNumber: '',
      etecAddress: '',
    },
  ];
  //////// Professional Details//////
  public profDetails = [
    {
      etepdDesignation: '',
      etepdSalary: '',
      etepdJoiningDate: '',
      etepdProbation: '',
    },
  ];
  public pdDesignation: any;
  public pdSalary: any;
  public pdProbation: any;
  public pdJoiningDate: any;
  public pdempStatus: any;
  /////// Academic Qualification/////////
  public academicQualification = [
    {
      etaqUploadDocuments: '',
      etaqQualification: '',
      etaqPassingYear: '',
      etaqCgpa: '',
      etaqInstituteName: '',
    },
  ];
  //////// Professional Qualification///////
  public profQualification = [
    {
      etpqDocuments: '',
      etpqCertification: '',
      etpqStratDate: '',
      etpqEndDate: '',
      etpqInstituteName: '',
    },
  ];
  //////// Working History///////
  public workHistory = [
    {
      etwhExperienceLetter: '',
      etwhCompanyName: '',
      etwhDesignation: '',
      etwhStratDate: '',
      etwhEndDate: '',
      etwhDuration: '',
    },
  ];
  rowId: any;

  _update:boolean=false
  _delete:boolean=false
  _insert:boolean=false
  _view:boolean=false
  constructor(
    public personalDetailService: PersonalDetailsService,
    public route: ActivatedRoute,
    private permissionService: PermissionsService
  ) {
  }

  ngOnInit() {
    this.rowId = this.route.snapshot.paramMap.get('id');
    this.getEmployeeDataByID(this.rowId);
   this.getPermissions();

  }
getPermissions(){
  const permissions = this.permissionService.gerPermissionsByRole(1);
  this._update = permissions.update;
  this._delete = permissions.delete;
  this._insert = permissions.insert;
  this._view = permissions.view;
}
  getEmployeeDataByID(rowId: any) {
    this.personalDetailService
      .viewEmployeeData(rowId)
      .subscribe((data: any) => {
        if (data.success) {
          let oneEmployeeData = data.data;
          this.profilePicUrl =
            this.personalDetailService.apiUrl +
            oneEmployeeData[0].etedPhotograph;
          this.empID = oneEmployeeData[0].etedEmployeeId;
          this.firstName = oneEmployeeData[0].etedFirstName;
          this.lastname = oneEmployeeData[0].etedLastName;
          this.phoneNo = oneEmployeeData[0].etedContactNumber;
          this.cnic = oneEmployeeData[0].etedCnic;
          this.personalEmail = oneEmployeeData[0].etedEmailAddress;
          this.professionalEmail = oneEmployeeData[0].etedOfficialEmailAddress;
          this.address = oneEmployeeData[0].etedAddress;
          this.dob = oneEmployeeData[0].etedDob;
          this.gender = oneEmployeeData[0].etedGender;
          this.maritalStatus = oneEmployeeData[0].etedMaritalStatus;
          this.employementStatus = oneEmployeeData[0].etedStatus;
          this.bloodGroup = oneEmployeeData[0].etedBloodGroup;
          this.religion = oneEmployeeData[0].etedReligion;
          this.nationality = oneEmployeeData[0].etedNationality;
          //////Emergency Contact /////
          this.emergencyContact = oneEmployeeData[0].emsTblEmergencyContact;
          //////// Professional Details//////
          this.profDetails =
            oneEmployeeData[0].emsTblEmployeeProfessionalDetails;
          /////// Academic Qualification/////////
          
          this.academicQualification =
            oneEmployeeData[0].emsTblAcademicQualification;
            for (let i = 0; i < oneEmployeeData[0].emsTblAcademicQualification.length; i++) {
            this.Acadname[i]=this.personalDetailService.apiUrl + oneEmployeeData[0].emsTblAcademicQualification[i].etaqUploadDocuments;
            let splitedPath = this.Acadname[i].split("/");
            let fileName = splitedPath[(splitedPath.length-1)];
            
            this.Acadname[i]=fileName;
            }
          //////// Professional Qualification///////
          this.profQualification =
            oneEmployeeData[0].emsTblProfessionalQualification;
            for (let i = 0; i < oneEmployeeData[0].emsTblProfessionalQualification.length; i++) {
            this.profQualName[i]=this.personalDetailService.apiUrl + oneEmployeeData[0].emsTblProfessionalQualification[i].etpqDocuments;
            let splitedPathProf = this.profQualName[i].split("/");
            let fileNameProf = splitedPathProf[(splitedPathProf.length-1)];
            this.profQualName[i]=fileNameProf;
            }

                
          //////Working History/////////
          this.workHistory = oneEmployeeData[0].emsTblWorkingHistory;
          for (let i = 0; i < oneEmployeeData[0].emsTblWorkingHistory.length; i++) {
          this.workHistoryName[i]=this.personalDetailService.apiUrl + oneEmployeeData[0].emsTblWorkingHistory[i].etwhExperienceLetter;
          
          let splitedPathWork = this.workHistoryName[i].split("/");
          let fileNameWork = splitedPathWork[(splitedPathWork.length-1)];
          this.workHistoryName[i]=fileNameWork;
          }

          

        
      }
        else 
        {
        }
      });
  }
  DownloadFile(path:any){
    saveAs(path)
    }
}
