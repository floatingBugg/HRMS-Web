import { SpinnerService } from 'src/app/services/spinner.service';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public spinnerService:SpinnerService,){}
  title = 'HRMS';
}
