import { AddEmployeeFailureDialogComponent } from './add-employee-failure-dialog/add-employee-failure-dialog.component';
import { Component, Input, OnInit, VERSION, ViewChild } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeDataService } from 'src/app/services/employee-data.service';
import { PersonalDetailsService } from 'src/app/services/personal-details.service';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { SuccessDialogComponent } from './success-dialog/success-dialog.component';
import { PermissionsService } from 'src/app/services/permissionsService/permissions.service';
import { AllEmployeesComponent } from 'src/app/modules/inventory/components/all-employees/all-employees.component';
import { AssignManagerComponent } from '../assign-manager/assign-manager.component';
import { InventoryService } from 'src/app/services/inventory.service';
import { SaveAssignedDataService } from 'src/app/services/save-assigned-data.service';
import { AssetassignGrid } from 'src/app/_interfaces/Assetassign-Grid';
import { MatTableDataSource } from '@angular/material/table';
import { UnassignAssetComponent } from 'src/app/modules/inventory/components/unassign-asset/unassign-asset.component';
import { AssignAssetComponent } from '../assign-asset/assign-asset.component';
import { InventoryGrid } from 'src/app/_interfaces/inventoryGrid';
import { SpinnerService } from 'src/app/services/spinner.service';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
})
export class AddEmployeeComponent implements OnInit {
  public assetdata:any;
  assetdatatable:any[]=[];
  assigndatatable:any[]=[];
  assetAssignObj: any = {itasItaAssetId: 0, assetName: '', itasItacCategoryId: 0, assetCatagoryName: '', itasQuantity: 0, itasAssignedDate: new Date()};
  assetAssignDT: any[] =[];
  invern!: InventoryGrid;

  public toggleButton: boolean = false;
  name = 'Angular ' + VERSION.major;
  userForm: FormGroup | undefined;
  users: FormArray | undefined;
  personalDetailsForm: any = FormGroup;
  emsTblAcademicQualification: any = FormArray;
  emsTblEmployeeProfessionalDetails: any = FormArray;
  emsTblProfessionalQualification: any = FormArray;
  emsTblWorkingHistory: any = FormArray;
  emsTblEmergencyContact: any = FormArray;
  imsAssign:any=FormArray;
  whStartDate: any;
  whStartDates: any;
  enum : any;
  whEndDate: any;
  startDate: any;
  day: any;
  showAddNewDropDownField:boolean=false;
  diff: any;
  profDetailsJoiningDate: any;
  noOfDays: any;
  monthValue: any;
  newDate: any;
  probationDate: any;
  monthval: any = 3;
  whDuration: any;
  errorMsg: any;
  imageUrl: any[] = [];
  profQualificationUrl: any[] = [];
  workingHistoryUrl: any[] = [];
  profilePicUrl: any;
  public currentIndexEmergency: any = 0;
  public currentIndexAcademic: any = -1;
  public currentIndexProfessionalDetails: any = 0;
  public currentIndexProfessionalQ: any = -1;
  public currentIndexWorkingHistory: any = -1;
  userId = localStorage.getItem('loggedIn_UserId');
  userName = localStorage.getItem('loggedIn_UserName');
  isFileChanged!: boolean;
  array2: any;
  array1: any;
  newDropDownValue: any;
  isDisabled: boolean | undefined;
  Designation:any=[];
  Degree:any=[];
  degName!:any;
  desName!: string;
  managerid:any;
  displayedColumns: string[] = ['DesName','degName'];
  dasignationdDdlVal: any;
  hdvdegreeName: any;
  value:any;
  value1:any;
  Id:any;
  displayedColumns1:string[]=[
    'assetid',
    'nameModel',
    'category',
    'quantity',
    'actions'

  ];
  hide = true;
  loading$ = this.loader.loading$;
  public assetData:any;
  assignleavestep:boolean=false;
  
  
  
 
  constructor(
    
    // private fb: FormBuilder,
    public employeeData: EmployeeDataService,
    private personaldetails: PersonalDetailsService,
    private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog,
    private inventory: InventoryService,
    public route: ActivatedRoute,
    public saveAssignedData:SaveAssignedDataService,
    private loader: SpinnerService
   
  
  ) 
  {
   
    // this.Designation = [
    //   { desName: 'HR Manager'},
    //   { desName: 'HR Officer'},
    //   { desName: 'Sr. Software Engineer' },
    //   { desName: 'Jr. Software Engineer'},
    //   { desName: 'SQA Engineer Intern'},
    //   { desName: 'Angular Intern' },
    //   { desName: '.NET Intern' },
    //   { desName: 'Sr. SQA Engineer' },
    //   { desName: 'Jr. SQA Engineer' },
    //   { desName: 'Project Manager' },
    //   { desName: 'System Administrator'},
    //   { desName: 'Receptionist' },
    //   { desName: 'Accountant' },
    //   { desName: 'Office Boy' },
    //   { desName: 'Guard' },
      
     
    // ];
  
    // this.Degree=[
    //   {degName:'Matriculation/O-Levels'},
    //   {degName:'Intermediate/A-Levels'},
    //   {degName:'Bachelors'},
    //   {degName:'BS Software Enginneering'},
    //   {degName:'BS Computer Science'},
    //   {degName:'BS Information Technology'},
    //   {degName:'BS Buisness Administraion'},
    //   {degName:'Masters/MSc'},
    //   {degName:'Ms Software Engineering'},
    //   {degName:'Ms Information Technology'},
    //   {degName:'Ms Computer Science'},
    //   {degName:'Ms Buisness Administration'},
    //   {degName:'MPhil/MS'},
    //   {degName:'Ms Computer Science'},
    //   {degName:'Doctrate/PHD'},
    // ];
    

  }

  ngOnInit() {
    
    this.userForm = this.fb.group({
      users: this.fb.array([])
    })
    this.createForm();
    this.getDropdownValue(1);
    this.getDropdownValue(2);
  }
  leaveassign(event:any){  
    console.log(event); 
    if(event.value == 'Active'){
     this.assignleavestep=true; }
     else{ 
       this.assignleavestep=false; }
       }

  showField(){
    this.showAddNewDropDownField = true;
  }

  pushValue(event:any,dropdownid:number){
    this.showAddNewDropDownField = false;
    this.dasignationdDdlVal= event.value;
   
    var obj  = {
      hdvHdDropdownId : dropdownid,
      hdvValueName : this.dasignationdDdlVal,
      // HdvCreatedBy:this.userId,
      // HdvCreatedByName:this.userName,
      
    }
    this.personaldetails.addDropdownValue(obj).subscribe((res:any)=>{
      if(res.success == true){
        this.getDropdownValue(dropdownid);
      }
    })
  }

//     control['etepdDesignation'].setValue(
//       abc
//     );
    // control.controls['etepdDesignation'].pushValue(abc);
// 
    // this.emsTblEmployeeProfessionalDetails().controls['etepdDesignation'].setValue(valueFilter)
    // this.personalDetailsForm.controls['etepdDesignation'].setValue(valueFilter)
    // debugger 
  
  getDropdownValue(id:number){
    this.Id=id;
    if(this.Id==1){
   this.personaldetails.getDropdownValue(this.Id).subscribe((res:any)=>{
    this.value=res.data;
    })
  }
   else if(this.Id==2){
    this.personaldetails.getDropdownValue(this.Id).subscribe((res:any)=>{
      this.value1=res.data;
      })
   } 
  }
 
  getAssetByCategoryID(itacCategoryId: any) {
    this.inventory
      .getAssetAssign(itacCategoryId)
      .subscribe((data: any) => {
      
        this.assetdata = new MatTableDataSource<AssetassignGrid>(data.data);

        this.saveAssignedData.assignedData['itaAssetName']= data.itaAssetName;
        console.log( 'hello',this.saveAssignedData.assignedData['itaAssetName'])
      });
  }
  unAssignAssetById(itasItaAssetId: any) {
    const dialogRef = this.dialog.open(UnassignAssetComponent);
    dialogRef.afterClosed().subscribe((res: any) => {
      if (res == true) {
        this.inventory.deleteAssetAssign(itasItaAssetId).subscribe((data) => {
          if(data){
            this.getAssetByCategoryID(this.itacCategoryId);
          }
        });
      }
    });
  }
  itacCategoryId(itacCategoryId: any) {
    throw new Error('Method not implemented.');
  }
//   showField(){
//     this.showAddNewDropDownField = true;
//   }
//   pushValue(event:any){
    
//    this.Designation.push({desName:event.value});
//     // this.Designation.desName=true
//     this.showAddNewDropDownField = false
//     var valueFilter = this.Designation.filter((t: any)=>t.desName ==event.value);
// var abc = valueFilter[0].desName;
   
//     let control = this.personalDetailsForm.controls[
//       'emsTblEmployeeProfessionalDetails'
//     ]['controls'][0]['controls'];

//     control['etepdDesignation'].setValue(
//       abc
//     );
//     // control.controls['etepdDesignation'].pushValue(abc);
// // 
//     // this.emsTblEmployeeProfessionalDetails().controls['etepdDesignation'].setValue(valueFilter)
//     // this.personalDetailsForm.controls['etepdDesignation'].setValue(valueFilter)
    
    
   
//   }
  onCreateAssign(){
    
    const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = "80%"
      this.dialog.open(AssignAssetComponent);

      this.dialog.afterAllClosed.subscribe((res: any)=>{
        this.tempTable()
      })
  }  

  tempTable()
  {
    let a =0;
      
      // this.inventory.assetObj.map((ItasQuantity ,a )=>{
      //    let b={[ItasQuantity] : this.inventory.assignObj[a]}
      //    this.assetData.push(b);
      // });
      this.assetAssignDT = [];
   
      this.inventory.assetObj.forEach((elem: any, index: any) => {
        let assetAssignObj = elem;

           assetAssignObj.itasItaAssetId = elem.assetid;
           assetAssignObj.assetName = elem.assetname;
           assetAssignObj.itasItacCategoryId = elem.categoryid;
           assetAssignObj.assetCatagoryName = elem.category;
           assetAssignObj.itasQuantity = this.inventory.assignObj[index].itasQuantity;
           assetAssignObj.itasAssignedDate = this.inventory.assignObj[index].itasAssignedDate;
           assetAssignObj.itasCreatedBy = 

           this.assetAssignDT.push(assetAssignObj);

           let imsAssign =
           this.personalDetailsForm.controls[
             'imsAssign'
           ]['controls'][index] = this.addAssetAssignList();
           
           imsAssign.controls['itasItaAssetId'].setValue(assetAssignObj.itasItaAssetId);
           imsAssign.controls['assetName'].setValue(assetAssignObj.assetName);

           this.personalDetailsForm.controls[
            'imsAssign'
          ]['controls'][index].patchValue(imsAssign);
      })
      
      this.assetdata= new MatTableDataSource<InventoryGrid>(this.assetAssignDT);
      
      // this.addAssetAssignList().setValue(this.assetAssignDT);
      // this.addImsAssign();
      //this.assetData=new MatTableDataSource<InventoryGrid>(this.inventory.assetObj);

  }

  addImsAssign(): void {

    this.imsAssign = this.personalDetailsForm.get(
      'imsAssign'
    ) as FormArray;
    let assignForm = this.addAssetAssignList();
    this.imsAssign.push(this.addAssetAssignList());
  
    }

  addAssetAssignList(): FormGroup{
    return this.fb.group({
      itasItaAssetId: [''],
      assetName: [''],
      itasItacCategoryId: [''],
      assetCatagoryName: [''],
      itasQuantity: [''],
      itasAssignedDate: [''],
      itasCreatedBy:[this.userId],
      itasCreatedByName:[this.userName]
    });
  }

  //////Academic Qualification/////////////
  
  

  addAcademicQualificationList(): FormGroup {
    return this.fb.group({
      etaqUploadDocuments: [''],
      etaqQualification: ['', Validators.required],
      etaqPassingYear: [, [Validators.maxLength(4), Validators.required]],
      etaqCgpa: [, Validators.required],
      etaqInstituteName: ['', Validators.required],
    });
  }
//   enable(){
//     this.isDisabled = false 
//   }
 
//  disable(){
//     this.isDisabled = true
//  }
  // addFunction(item: { type: any; year: any; }) {
  //   let index = this.array2.findIndex((x: { type: any; year: any; }) => x.type == item.type  && x.year == item.year)
  //   this.array1.push(this.array2[index])
  //   this.array2.splice(index,1)
  // }

  addAcademicQualification(): void {
    this.emsTblAcademicQualification = this.personalDetailsForm.get(
      'emsTblAcademicQualification'
    ) as FormArray;
    this.emsTblAcademicQualification.push(this.addAcademicQualificationList());
  }

  
  ///////Emergency Contact//////////////
  addemsTblEmergencyContact(): FormGroup {
    return this.fb.group({
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

  onCreate(){
    const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = "80%"
      this.dialog.open(AssignManagerComponent);

     this.dialog.afterAllClosed.subscribe((res: any) => {
       this.getmanagerid();
     })
  }

  getmanagerid(){
      this.managerid= this.personaldetails.managerId;
      let controlProfessionalDetails =
          this.personalDetailsForm.controls[
            'emsTblEmployeeProfessionalDetails'
          ]['controls'][0]['controls'];
          controlProfessionalDetails['etedManagerId'].setValue(
            this.managerid
          );
        this.personalDetailsForm.controls['etedManagerId'].setValue(this.managerid);
      //this.emsTblEmployeeProfessionalDetails[0].controls["etepdSalary"].setValue(this.managerid);
  }
  

  ///////Professional Details/////////////
  addEmsTblEmployeeProfessionalDetails(): FormGroup {
    return this.fb.group({
      etepdSalary: ['', Validators.required],
      etepdProbation: [this.newDate, Validators.required],
      etepdDesignation: ['', Validators.required],
      etepdJoiningDate: [null, Validators.required],
      etedManagerId: [''],
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
      etpqDocuments: [''],
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
  createForm() {
    this.personalDetailsForm = this.fb.group({
      etedPhotograph: [''],
      etedFirstName: ['', Validators.required],
      etedLastName: ['', Validators.required],
      etedContactNumber: [
        '',
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
      etrethuroleid:['',Validators.required],
      ethupassword:['',Validators.required],
      etedGender: ['', Validators.required],
      etedMaritalStatus: ['', Validators.required],
      etedStatus: ['', Validators.required],
      etedBloodGroup: ['', Validators.required],
      etedReligion: ['', Validators.required],
      etedManagerId:[],
      etedNationality: ['', Validators.required],
      etedCreatedBy: [this.userId],
      etedCreatedByName: [this.userName],
      emsTblEmergencyContact: this.fb.array([this.addemsTblEmergencyContact()]),
      emsTblAcademicQualification: this.fb.array([]),
      emsTblEmployeeProfessionalDetails: this.fb.array([
        this.addEmsTblEmployeeProfessionalDetails(),
      ]),
      emsTblProfessionalQualification: this.fb.array([]),
      emsTblWorkingHistory: this.fb.array([]),
      imsAssign:this.fb.array([])
    });
  }
  submitData() {
    let form = this.personalDetailsForm.value;
    
    this.assetAssignDT.forEach((elem: any, index: any) => {
      form.imsAssign[index] = elem;
    });
    
    console.log(this.personalDetailsForm.value);
    
    this.personaldetails
      .personalDetails(form)
      .subscribe((result) => {
        if (result.success) {
          this.dialog.open(SuccessDialogComponent);
          console.log(result.message);
        } else {
          this.errorMsg = result.message;
          console.log('error Msgggg', this.errorMsg);
          localStorage.setItem('errorMessage', this.errorMsg);
          this.personaldetails._responseMessage = this.errorMsg;
          this.dialog.open(AddEmployeeFailureDialogComponent, {
            width: '600px',
          });
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
    }).format(this.newDate);control
    ['etepdProbation'].setValue(this.probationDate);
  }

  checkEmergencyInput(emergencyFirstName: any) {
    let btn = <HTMLInputElement>document.getElementById('emergencyBtn');
    emergencyFirstName = <HTMLInputElement>(
      document.getElementById('emergencyFirstName')
    );
    if (emergencyFirstName.value.length == 0) {
      btn.disabled = false;
    } else {
      btn.disabled = true;
    }
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
}


