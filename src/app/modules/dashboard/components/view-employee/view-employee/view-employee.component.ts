import { EmployeeDataService } from '../../../../../services/employee-data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PersonalDetailsService } from 'src/app/services/personal-details.service';
import { ActivatedRoute } from '@angular/router';
import { saveAs } from 'file-saver';
import { PermissionsService } from 'src/app/services/permissionsService/permissions.service';
import { InventoryService } from 'src/app/services/inventory.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { InventoryGrid } from 'src/app/_interfaces/inventoryGrid';
import { MatSort } from '@angular/material/sort';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

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
  public password: any;
  public roleid: any;
  public role: any;
  public apiURL = this.personalDetailService.apiUrl;
  public workHistoryName : any[] = [];
  public profQualName : any[] = [];
  public Acadname : any[] = [];
  profilePicUrl: any;
  assetEditData: any;
  public assetdata: any;
  imsAssign: any = FormArray;
  emsTblPermanentEmployee: any = FormArray;
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
  //////// Permanent employee/////
  public permanentemp = [
    {
      eesStartDate:'',
      eesEvaluationDate: '',
      eesDateOfIncrement: '',
      eesIncrement: '',
      eesRemarks: '',
      eesSalary: ''
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
  //////////assign asset///////
  public assignasset=[
    // {itasItaAssetId: 0, assetName: '', itasItacCategoryId: 0, assetCatagoryName: '', itasQuantity: 0, itasAssignedDate: new Date()}
    {
      itasAssignId: '',
    itasItacCategoryId:'',
      itasAssignedDate: '',
      itasCreatedBy: '',
      assetCatagoryName:'',
      itasEtedEmployeeId: '',
      itasQuantity: '',
      itasItaAssetId: '',
      
    }
  ]
  assetAssignDT: any[] = [];
  rowId: any;
  displayedColumns1: string[] = [
    'assetid',
    'nameModel',
    'category',
    'quantity',
  ];
  @ViewChild(MatSort, {static: false}) sort!: MatSort;
  _update:boolean=false
  _delete:boolean=false
  _insert:boolean=false
  _view:boolean=false
  userId: any;
  userName: any;
  personalDetailsForm: any;
  id: any;
  constructor(
    public personalDetailService: PersonalDetailsService,
    public route: ActivatedRoute,
    private permissionService: PermissionsService,
    public inventoryservice:InventoryService,
    private fb: FormBuilder,
    private inventory: InventoryService,
  ) {
  }

  ngOnInit() {
    this.rowId = this.route.snapshot.paramMap.get('id');
    this.getEmployeeDataByID(this.rowId);
   this.getPermissions();
   this.getEmployeeAsset(this.rowId);


  }
getPermissions(){
  const permissions = this.permissionService.getPermissionsByRole(1);
  this._update = permissions.update;
  this._delete = permissions.delete;
  this._insert = permissions.insert;
  this._view = permissions.view;
}
// getEmployeeData() {
//   this.inventoryservice.getAssetAssign(this.empid).subscribe( (data:any) => {
//     this.assetData = new MatTableDataSource<employeeGrid>(data.data);
//    // this.employeeData.sort = this.sort;
//     this.assetData.paginator = this.paginator;

//   });
// }
// getEmployeeAsset(empID:any){
  
//   this.inventoryservice.getAllAssetbyEmpID(empID)
//   .subscribe((data:any)=>{
//     if (data.success) {
//        this.assetData=new MatTableDataSource<InventoryGrid>(data.data);
       
//     }
//   });
// }
getEmployeeAsset(empID: any) {
  debugger
  this.inventory.getAllAssetAssingedbyEmpID(empID).subscribe((data: any) => {
    if (data.success) {
      this.assetEditData = data.data;
      this.assetdata = new MatTableDataSource<InventoryGrid>(this.assetEditData);
    }
  });
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
addImsAssign(): void {
  this.imsAssign = this.personalDetailsForm.get('imsAssign') as FormArray;
  let assignForm = this.addAssetAssignList();
  this.imsAssign.push(this.addAssetAssignList());
}
tempTable() {
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
  getEmployeeDataByID(rowId: any) {
    this.personalDetailService
      .viewEmployeeData(rowId)
      .subscribe((data: any) => {
        if (data.success) {
          let oneEmployeeData = data.data;
          let userdata =oneEmployeeData[0].emsTblHrmsUser;
          this.password=userdata[0].ethuPassword;
          this.roleid=userdata.etrEthuRoleId;
          ;
          if(this.roleid==1)
          {
             this.role="Super-Admin";
          }
          else if(this.roleid==2)
          {
             this.role="Admin";
          }
          else if(this.roleid==3)
          {
             this.role="Team-Lead";
          }
          else
          {
            this.role="User";
          }

          
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
          
          this.assetdata= oneEmployeeData[0].imsAssign;
          //////// Professional Details//////
          this.profDetails =
            oneEmployeeData[0].emsTblEmployeeProfessionalDetails;
            ////// Permanent Employee//////
            this.permanentemp =
            oneEmployeeData[0].emsTblPermanentEmployee;
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


          console.log(this.assetdata);
          

        
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
