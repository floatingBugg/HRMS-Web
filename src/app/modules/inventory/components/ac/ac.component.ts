import { Component, OnInit } from '@angular/core';
import {FormControl,FormArray,Validators,FormGroup,FormBuilder,AbstractControl,RequiredValidator} from '@angular/forms';
import { Router } from '@angular/router';
import {MatDialog,MatDialogRef,MAT_DIALOG_DATA,} from '@angular/material/dialog';
import { SuccessDialogComponent } from 'src/app/modules/dashboard/components/add-employee/success-dialog/success-dialog.component';
import { AddEmployeeFailureDialogComponent } from 'src/app/modules/dashboard/components/add-employee/add-employee-failure-dialog/add-employee-failure-dialog.component';
import { InventoryService } from 'src/app/services/inventory.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ac',
  templateUrl: './ac.component.html',
  styleUrls: ['./ac.component.scss']
})
export class AcComponent implements OnInit {
  acForm: any = FormGroup;
  errorMsg: any;
  


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private inventory: InventoryService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.acForm = this.fb.group({
      itacCategoryId: 5,
      itaAssetName: ['', Validators.required],
      itaCompanyName: ['',  Validators.required],
      itaSize: ['',  Validators.required],
      itaQuantity: ['',  Validators.required],
      itaCost: ['',  Validators.required],
      itaPurchaseDate: ['',  Validators.required],
    });
  }
  onlyNumbersAllowed(event: any): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  submitData() {
    console.log(this.acForm.value);
    this.inventory
      .postAssets(this.acForm.value)
      .subscribe((result) => {
        if (result.success) {
          Swal.fire({
            title: 'Added!',
            text: 'Record added successfully',
            icon: 'success',
            showCancelButton: false,
            confirmButtonText: 'Thank You',
            //cancelButtonText: 'No, keep it'
          }).then((res) => {
            this.router.navigate(["inventory/unassigned-ac"])
          })
        } 
        else
         {
          this.errorMsg = result.message;
          Swal.fire({
            title: 'ERROR!',
            text: this.errorMsg,
            icon: 'error',
            showCancelButton: false,
            confirmButtonText: 'Okay',
            //cancelButtonText: 'No, keep it'
          })
          console.log(result.message);
        }
      });
  }
}
