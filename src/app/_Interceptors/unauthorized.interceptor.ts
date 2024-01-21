import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { ScenarioResponseDTO } from '../Models/ScenarioResponseDTO';

@Injectable()
export class UnauthorizedInterceptor implements HttpInterceptor {

  constructor(private router: Router) {
   
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<ScenarioResponseDTO>> {

    return next.handle(request).pipe(
      tap((event) => {
      
        if (event instanceof HttpResponse) {
        
          if( event?.body?.httpCode ==401){
            this.router.navigateByUrl('/no-access');

          }
        
        }
      })
    );
  }
}
