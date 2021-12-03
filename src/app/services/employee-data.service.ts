import { Injectable } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
  FormArray,
  FormsModule,
} from '@angular/forms';
import { PersonalDetailsService } from './personal-details.service';
import { AcademicForm } from '../modules/dashboard/components/add-employee/academic-form.model';
@Injectable({
  providedIn: 'root',
})
export class EmployeeDataService {
  constructor(private personaldetails: PersonalDetailsService,private fb: FormBuilder ) {}
  ngOnInit() {}
}
