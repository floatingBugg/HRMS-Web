import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { SpinnerService } from '../services/spinner.service';

@Injectable()
export class LoginInterceptor implements HttpInterceptor {
  constructor(private spinnerService: SpinnerService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.spinnerService.show();
    if (localStorage.getItem('token')) {
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      });
    }
    this.spinnerService.spinner$.next(true);
    return next.handle(request).pipe(
      finalize(
        ()=>{
          this.spinnerService.hide();
          this.spinnerService.spinner$.next(false)
        }
      )
    );

  }
}
