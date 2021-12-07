import { Component, OnInit } from '@angular/core';
import { AcademicForm } from '../add-employee/academic-form.model';
import { EmployeeDataService } from 'src/app/services/employee-data.service';
@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {

  constructor(public employeeDataS: EmployeeDataService) { }

  ngOnInit(): void {
  }

}
