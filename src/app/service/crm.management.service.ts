import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { BehaviorSubject } from 'rxjs';
import { ClientUserDataDTO } from '../Models/DTOs/PermissionDTOs/ClientUserDataDTO';
import { Utilities } from './Utilities.service';

@Injectable({
  providedIn: 'root'
})
export class CRMManagementService {
  accessToken:string;
  currentUserSource = new BehaviorSubject<ClientUserDataDTO | null>(null);
  curretUser$ = this.currentUserSource.asObservable();
  constructor(private http: HttpClient, private _router: Router, private utilities: Utilities,
    public oidcSecurityService: OidcSecurityService) {
    this.GetUserToken();
   
  }
  private GetUserToken(){
    this.accessToken = "";
    this.oidcSecurityService.getAccessToken().subscribe((token: any) => {
     if(token!=null){
       this.accessToken = token;
     }
   });
  }
  post(url: string, model: any) {
    var typeName =model["TypeName"] || model["typeName"] || model["typename"]
    const httpOptions = {
      headers: new HttpHeaders({ 'typeName':typeName ,'Content-Type': 'application/json' , 'Authorization': 'Bearer ' + Utilities.userToken})
    }
    
    let body = JSON.stringify(model);
    return this.http.post(url, body, httpOptions);

  }
  get(url: string) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + Utilities.userToken})
    }
    return this.http.get(url, httpOptions);
  }
}
