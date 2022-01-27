import { Component, OnInit } from '@angular/core';
import {FormControl,FormArray,Validators,FormGroup,FormBuilder,AbstractControl,RequiredValidator} from '@angular/forms';
import {MatDialog,MatDialogRef,MAT_DIALOG_DATA,} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { InventoryService } from 'src/app/services/inventory.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-assign-quantity',
  templateUrl: './assign-quantity.component.html',
  styleUrls: ['./assign-quantity.component.scss']
})
export class AssignQuantityComponent implements OnInit {
  assignForm: any = FormGroup;
  errorMsg: any;
  catagoryId: number = 0;
  assetId: number = 0;
  userId = localStorage.getItem('loggedIn_UserId');
  userName = localStorage.getItem('loggedIn_UserName');

  constructor(private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog,
    private inventory: InventoryService,
    public dialogRef: MatDialogRef<any>,) { }

  ngOnInit(): void {
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
  
  });
}

submitData() {
  console.log(this.assignForm.value);
  this.inventory
    .postAssetsAssign(this.assignForm.value)
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
          this.dialog.closeAll();
          this.router.navigate(["inventory"])
        })
      }   else 
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
