import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormArray,
  Validators,
  FormGroup,
  FormBuilder,
  AbstractControl,
  RequiredValidator
} from '@angular/forms';
import { Router } from '@angular/router';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { SuccessDialogComponent } from 'src/app/modules/dashboard/components/add-employee/success-dialog/success-dialog.component';
import { AddEmployeeFailureDialogComponent } from 'src/app/modules/dashboard/components/add-employee/add-employee-failure-dialog/add-employee-failure-dialog.component';
import { InventoryService } from 'src/app/services/inventory.service';

@Component({
  selector: 'app-screens',
  templateUrl: './screens.component.html',
  styleUrls: ['./screens.component.scss']
})
export class ScreensComponent implements OnInit {
  screensForm: any = FormGroup;
  public currentIndexScreens: any = -1;
  errorMsg: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog,
    private inventory: InventoryService,
   
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
   
    this.screensForm = this.fb.group({
      itaAssetName: ['', Validators.required],
      itaCompanyName: ['', Validators.required],
      itaModel: ['', Validators.required],
      itaSize: ['', Validators.required],
      itaQuantity: ['', Validators.required],
      itaCost: ['', Validators.required],
      itaPurchaseDate: ['', Validators.required],
    });
  }
  onlyNumbersAllowed(event: any): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  isscreensFormDisabled() {
    if (this.currentIndexScreens >= 0) {
      let result =
        this.screensForm.controls['emsTblProfessionalQualification'][
          'controls'
        ][this.currentIndexScreens].valid;
      return !result;
    } else {
      return false;
    }
  }

  submitData() {
    debugger
    console.log(this.screensForm.value);
    this.inventory
      .postAssets(this.screensForm.value)
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
