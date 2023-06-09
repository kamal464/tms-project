import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterserviceInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let myreq = request.clone({
      // method: 'post',
      headers: request.headers.set('Content-Type', 'application/json')
      // .set('header2', 'header 2 value')
      // .set('header3', 'header 3 value')
      .set('org_id', '1681241822')
      // .set('office_id',"1680522899")
    });
    console.log('request intercepted',myreq);
    return next.handle(myreq);
  }
}
