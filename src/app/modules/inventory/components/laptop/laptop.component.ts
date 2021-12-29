import { Component, OnInit } from '@angular/core';
import {FormControl,FormArray,Validators,FormGroup,FormBuilder,
  AbstractControl, RequiredValidator} from '@angular/forms';
 import { Router } from '@angular/router';
import { MatDialog,MatDialogRef,MAT_DIALOG_DATA,} from '@angular/material/dialog';
import { SuccessDialogComponent } from 'src/app/modules/dashboard/components/add-employee/success-dialog/success-dialog.component';
import { AddEmployeeFailureDialogComponent } from 'src/app/modules/dashboard/components/add-employee/add-employee-failure-dialog/add-employee-failure-dialog.component';
import { InventoryService } from 'src/app/services/inventory.service';
@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.scss']
})
export class LaptopComponent implements OnInit {
  laptopForm: any = FormGroup;
  public currentIndexLaptop: any = -1;
  errorMsg: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
   private inventory: InventoryService,
   private dialog:MatDialog,
) { }

  ngOnInit(): void {
    this.createForm();

  }
  onlyNumbersAllowed(event: any): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }


  createForm() {
    this.laptopForm = this.fb.group({
      itaAssetName: ['', Validators.required],
      itaSerialNo: ['', Validators.required],
      itaCompanyName: ['', Validators.required],
      itaGeneration: ['', Validators.required],
      itaProcessor: ['', Validators.required],
      itaRam: ['', Validators.required],
      itaHardriveType: ['', Validators.required],
      itaStorage: ['', Validators.required],
      itaQuantity: ['', Validators.required],
      itaCost: ['', Validators.required],
      itaPurchaseDate: ['', Validators.required],
     
    });
  }
  isLaptopFormDisabled() {
    if (this.currentIndexLaptop >= 0) {
      let result =
        this.laptopForm.controls['emsTblProfessionalQualification'][
          'controls'
        ][this.currentIndexLaptop].valid;
      return !result;
    } else {
      return false;
    }
  }
  submitData() {
    console.log(this.laptopForm.value);
    this.inventory
      .postAssets(this.laptopForm.value)
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