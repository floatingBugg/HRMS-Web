import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { PersonalDetailsService } from 'src/app/services/personal-details.service';
@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {

  constructor(public empDataService: PersonalDetailsService, public route: ActivatedRoute) { }
  id: any;
  public editDataArray: any;
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.empDataService.viewEmployeeData(this.id).subscribe((data) => {
      if (data.success) {
        console.log(data.data[0]);
        this.editDataArray = data.data[0];
      }

    });
  }

}
