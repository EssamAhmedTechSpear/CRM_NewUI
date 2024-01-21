import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Utilities } from './service/Utilities.service';
import { LoginResponse, OidcSecurityService } from 'angular-auth-oidc-client';
import { CRMManagementService } from './service/crm.management.service';
import { CookieService } from 'ngx-cookie-service';
import { ClientUserDataDTO } from './Models/DTOs/PermissionDTOs/ClientUserDataDTO';
import { Strings } from './service/Strings';
import { ScenarioBaseDTO } from './Models/ScenarioBaseDTO.model';
import { ScenarioResponseDTO } from './Models/ScenarioResponseDTO';
import { UserEntityPermissions } from './Models/DTOs/PermissionDTOs/UserEntityPermissions';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {

    userData: ClientUserDataDTO;
    curentUser:string = null;
    isUserPermissionsLoaded: boolean;
    userEntityPermissions: UserEntityPermissions = new UserEntityPermissions();
    entityPermissionDictionary: { [key: string]: string[] };



    constructor(
        private router: Router,
    private utilities: Utilities,
    private oidcSecurityService: OidcSecurityService,
    private crmManagementService: CRMManagementService,
    private cookieService: CookieService
    ) {
        debugger;
        var x = environment.DomainURL;
        this.oidcSecurityService
      .checkAuth()
      .subscribe((loginResponse: LoginResponse) => {
        const { isAuthenticated, userData, accessToken, idToken, configId } =
          loginResponse;
        this.userData = userData;
        crmManagementService.currentUserSource.next(userData);
        console.log("userData", userData);
       if(userData != null){
          this.curentUser= userData["UserName"];
        if (!loginResponse.isAuthenticated) {
          let currentPageUrl = location.href
          localStorage.setItem(Strings.StaticWords.RedirectUrl, currentPageUrl)
          this.oidcSecurityService.authorize()
        }
        else {
          this.oidcSecurityService.getAccessToken().subscribe((token: any) => {
            if (token != null) {

              Utilities.userToken = token;
              this.isUserPermissionsLoaded = false;
              this.redirectToCurrectPage();
              //this.CheckClientUser();
              this.getUserPermissions(userData?.UserName);
            }
            else
            {
                this.router.navigate(['/error401']);
            }
          });
        }
        }
        else {
            let currentPageUrl = location.href
          localStorage.setItem(Strings.StaticWords.RedirectUrl, currentPageUrl)
          this.oidcSecurityService.authorize()
          }
      });

    }


    redirectToCurrectPage() {
        var refirectURL = localStorage.getItem(Strings.StaticWords.RedirectUrl);
        if (refirectURL) {
          location.href = refirectURL;
          localStorage.removeItem(Strings.StaticWords.RedirectUrl);
        }
      }

      getUserPermissions(clientUserId: string) {

        let getUserPermissionsByClientUserIdScenario: ScenarioBaseDTO = new ScenarioBaseDTO();
        getUserPermissionsByClientUserIdScenario.Body = { "userName": clientUserId }
        getUserPermissionsByClientUserIdScenario.TypeName = Strings.typeNames.GetUserPermissionsByClientUserIdScenario;
        this.crmManagementService.post(Strings.ScenarioUrl, getUserPermissionsByClientUserIdScenario).subscribe(res => {
          let getUserPermissionsByClientUserIdScenarioResponse: ScenarioResponseDTO = new ScenarioResponseDTO();
          getUserPermissionsByClientUserIdScenarioResponse = res as ScenarioResponseDTO;
    
          this.isUserPermissionsLoaded = true;
          if (getUserPermissionsByClientUserIdScenarioResponse.httpCode == 200) {
    
            this.entityPermissionDictionary = getUserPermissionsByClientUserIdScenarioResponse?.result?.permissionsKeyValue;
            this.userEntityPermissions = this.MapPermissions(getUserPermissionsByClientUserIdScenarioResponse?.result.permissionsKeyValue);
            this.utilities.currentUserPermissions.next(this.userEntityPermissions);
          }
          else {
            this.router.navigate(['/error401']);
          }
        })
      }
      MapPermissions(response: any) {
        const userPermissions = new UserEntityPermissions();
    
        for (const entityKey in response) {
          if (response.hasOwnProperty(entityKey)) {
            const permissionsList = response[entityKey];
            const entityPermission = userPermissions[entityKey];
            if (entityPermission) {
              for (const iterator of permissionsList) {
                entityPermission[iterator] = true;
              }
              entityPermission.IsExist = true;
            }
          }
        }
        return userPermissions;
      }
}
