import { Component, OnInit } from '@angular/core';
import {FormControl,FormArray,Validators,FormGroup,FormBuilder,AbstractControl,RequiredValidator} from '@angular/forms';
import { Router } from '@angular/router';
import {MatDialog,MatDialogRef,MAT_DIALOG_DATA,} from '@angular/material/dialog';
import { SuccessDialogComponent } from 'src/app/modules/dashboard/components/add-employee/success-dialog/success-dialog.component';
import { AddEmployeeFailureDialogComponent } from 'src/app/modules/dashboard/components/add-employee/add-employee-failure-dialog/add-employee-failure-dialog.component';
import { InventoryService } from 'src/app/services/inventory.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-drives',
  templateUrl: './drives.component.html',
  styleUrls: ['./drives.component.scss']
})
export class DrivesComponent implements OnInit {
  drivesForm: any = FormGroup;
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
  onlyNumbersAllowed(event: any): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  createForm() {
    
    this.drivesForm = this.fb.group({
      itacCategoryId: 3,
      itaAssetName: ['', Validators.required],
      itaQuantity: ['', Validators.required],
      itaCost: ['', Validators.required],
      itaPurchaseDate: ['', Validators.required],
      
    });
  }
  submitData() {
    console.log(this.drivesForm.value);
    this.inventory
      .postAssets(this.drivesForm.value)
      .subscribe((result) => {
        if (result.success) {
          //this.router.navigate([""]);
          //this.dialog.open(SuccessDialogComponent);
          Swal.fire({
              title: 'Added!',
              text: 'Record added successfully',
              icon: 'success',
              showCancelButton: false,
              confirmButtonText: 'Thank You',
              //cancelButtonText: 'No, keep it'
            }).then((res) => {
              this.router.navigate(["inventory/unassigned-drives"])
            })
          // Swal.fire({
          //   title: 'Are you sure want to remove?',
          //   text: 'You will not be able to recover this file!',
          //   icon: 'warning',
          //   showCancelButton: true,
          //   confirmButtonText: 'Yes, delete it!',
          //   cancelButtonText: 'No, keep it'
          // }).then((result) => {
          //   if (result.value) {
          //     Swal.fire(
          //       'Deleted!',
          //       'Your imaginary file has been deleted.',
          //       'success'
          //     )
          //   }
          // })
          
          console.log(result.message);
        } else {
          this.errorMsg = result.message;
          Swal.fire({
            title: 'ERROR!',
            text: this.errorMsg,
            icon: 'error',
            showCancelButton: false,
            confirmButtonText: 'Okay',
            //cancelButtonText: 'No, keep it'
          })
        //   console.log('error Msgggg', this.errorMsg);
        //   localStorage.setItem('errorMessage', this.errorMsg);
        //   this.inventory._responseMessage = this.errorMsg;
        //   this.dialog.open(AddEmployeeFailureDialogComponent, {
        //     width: '600px',
        //  });
          console.log(result.message);
        }
      });
  }

}
