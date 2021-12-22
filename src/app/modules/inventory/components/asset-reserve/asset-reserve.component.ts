import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-asset-reserve',
  templateUrl: './asset-reserve.component.html',
  styleUrls: ['./asset-reserve.component.scss']
})
export class AssetReserveComponent implements OnInit {
  centered = false;
  disabled = false;
  unbounded = false;

  radius !: number;
  color !: string;

  pageSizeOptions: number[] = [ 10, 25, 100];
  public assets:any;// new MatTableDataSource<employeeGrid>();

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

}
