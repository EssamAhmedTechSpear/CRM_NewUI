import { Component } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-post-signout',
  templateUrl: './post-signout.component.html',
  styleUrls: ['./post-signout.component.css']
})
export class PostSignoutComponent {

  constructor(private cookieService: CookieService,public oidcSecurityService: OidcSecurityService) {
    this.logout();
   }

  logout() {
    this.oidcSecurityService.logoff().subscribe((result) => {
       
    this.cookieService.deleteAll('/', window.location.hostname);       
    window.location.href=location.origin;
  });
    
}
}
