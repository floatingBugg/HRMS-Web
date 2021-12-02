import { SpinnerService } from 'src/app/services/spinner.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public spinnerService:SpinnerService){}
  title = 'HRMS';
}
