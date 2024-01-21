import { Component } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-post-sign-in',
  templateUrl: './post-sign-in.component.html',
  styleUrls: ['./post-sign-in.component.css']
})
export class PostSignInComponent {
  userToken  = "";
  constructor(public oidcSecurityService: OidcSecurityService) {
    //this.getUserToken();
    //window.location.href=location.origin;
  }

  getUserToken(){
     
    this.oidcSecurityService.getAccessToken().subscribe(res =>{
       
      this.userToken = res;
      
      
    });
  }
}
