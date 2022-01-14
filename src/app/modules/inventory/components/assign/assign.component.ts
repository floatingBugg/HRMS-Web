import { Component, OnInit } from '@angular/core';
import {FormControl,FormArray,Validators,FormGroup,FormBuilder,AbstractControl,RequiredValidator} from '@angular/forms';
import { Router } from '@angular/router';
import {MatDialog,MatDialogRef,MAT_DIALOG_DATA,} from '@angular/material/dialog';
import { InventoryService } from 'src/app/services/inventory.service';
import { SuccessDialogComponent } from 'src/app/modules/dashboard/components/add-employee/success-dialog/success-dialog.component';
import { AddEmployeeFailureDialogComponent } from 'src/app/modules/dashboard/components/add-employee/add-employee-failure-dialog/add-employee-failure-dialog.component';
@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.scss']
})
export class AssignComponent implements OnInit {
  assignForm: any = FormGroup;
  errorMsg: any;
  catagoryId: number = 0;
  empId: number = 0;
  assetId: number = 0;
  userId = localStorage.getItem('loggedIn_UserId');
  userName = localStorage.getItem('loggedIn_UserName');

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog,
    private inventory: InventoryService,
    public dialogRef: MatDialogRef<any>,
   
    
  ) { 
    this.empId = this.inventory.employeeId;
    this.catagoryId = this.inventory.catagoryId;
    this.assetId = this.inventory.assetId;
  }

  ngOnInit(): void {
    this.createForm();
  }
  onNoClick()
   {
    this.dialogRef.close();
  }
  onlyNumbersAllowed(event: any): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  createForm() {
    this.assignForm = this.fb.group({
      itasQuantity: ['', Validators.required],
      itasAssignedDate: ['', Validators.required],
      itasitaccategoryid: this.catagoryId,
      itasItaAssetId: this.assetId,
      itascreatedby: this.userId,
      itascreatedbyname:this.userName,
      itasEtedEmployeeId: this.empId
    
    });
  }

  submitData() {
    console.log(this.assignForm.value);
    this.inventory
      .postAssetsAssign(this.assignForm.value)
      .subscribe((result) => {
        if (result.success) {
          this.dialog.open(SuccessDialogComponent);
          console.log(result.message);
        } else {
          this.errorMsg = result.message;
          console.log('error Msgggg', this.errorMsg);
          localStorage.setItem('errorMessage', this.errorMsg);
          this.inventory._responseMessage = this.errorMsg;
          this.dialog.open(AddEmployeeFailureDialogComponent, {
            width: '600px',
         });
          console.log(result.message);
        }
      });
  }

}
