import { Component, ElementRef, OnInit } from '@angular/core';
import { PersonalDetailsService } from 'src/app/services/personal-details.service';

@Component({
  selector: 'app-add-employee-failure-dialog',
  templateUrl: './add-employee-failure-dialog.component.html',
  styleUrls: ['./add-employee-failure-dialog.component.scss']
})
export class AddEmployeeFailureDialogComponent implements OnInit {
  errorRef:ElementRef | undefined
  errorMsg:any;
  responseMesage:string = ""
  constructor(private personalDetailService: PersonalDetailsService) {
    this.errorMsg =  localStorage.getItem('errorMessage')
    this.responseMesage = personalDetailService.responseMessage;
   }

  ngOnInit(): void {
  }

}
