import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
 showSpinner = false;
  constructor( ) { }
  ngOnInit(): void {
  }

}
