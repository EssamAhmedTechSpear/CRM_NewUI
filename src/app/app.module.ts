import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

//Routes
import { routes } from './app.route';

import { AppComponent } from './app.component';

// service
import { AppService } from './service/app.service';

//tables
import { DataTableModule } from '@bhplugin/ng-datatable';

// store
import { StoreModule } from '@ngrx/store';
import { indexReducer } from './store/index.reducer';

// i18n
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// headlessui
import { MenuModule } from 'headlessui-angular';

// perfect-scrollbar
import { NgScrollbarModule } from 'ngx-scrollbar';

// dashboard
import { IndexComponent } from './index';

// Layouts
import { AppLayout } from './layouts/app-layout';
import { AuthLayout } from './layouts/auth-layout';

import { HeaderComponent } from './layouts/header';
import { FooterComponent } from './layouts/footer';
import { SidebarComponent } from './layouts/sidebar';
import { ThemeCustomizerComponent } from './layouts/theme-customizer';
import { SearchComponent } from './pages/leads/search/search.component';
import { IconModule } from './shared/icon/icon.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';
import { Utilities } from './service/Utilities.service';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';
import { environment } from 'src/environments/environment';
import { CRMManagementService } from './service/crm.management.service';
import { PostSignoutComponent } from './Auth/post-signout/post-signout.component';
import { PostSignInComponent } from './Auth/post-sign-in/post-sign-in.component';
import { UnauthorizedInterceptor } from './_Interceptors/unauthorized.interceptor';

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
        BrowserModule,
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        Ng2FlatpickrModule,
        HttpClientModule,
        DataTableModule,
        MenuModule,
        IconModule,
        
        NgSelectModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: httpTranslateLoader,
                deps: [HttpClient],
            },
        }),
        StoreModule.forRoot({ index: indexReducer }),
        NgScrollbarModule.withConfig({
            visibility: 'hover',
            appearance: 'standard',
        }),
        AuthModule.forRoot({
      
            config: {
              authority: environment.IdentityServerConfig.authority,
              redirectUrl: environment.IdentityServerConfig.redirectUrl,
              postLogoutRedirectUri: environment.IdentityServerConfig.postLogoutRedirectUri,
              clientId: environment.IdentityServerConfig.clientId,
              scope:  environment.IdentityServerConfig.scope,
              responseType: environment.IdentityServerConfig.responseType,
              silentRenew: environment.IdentityServerConfig.silentRenew,
              useRefreshToken:  environment.IdentityServerConfig.useRefreshToken,
              logLevel: LogLevel.Debug,
              disablePkce:false
            },
          
          }),
    ],
    declarations: [AppComponent, 
        HeaderComponent, 
        FooterComponent, 
        SidebarComponent, 
        ThemeCustomizerComponent, 
        IndexComponent, 
        AppLayout, 
        AuthLayout, 
        SearchComponent, 
        DashboardComponent,
        PostSignInComponent,
        PostSignoutComponent
    ],
    providers: [AppService, Title,Utilities,DatePipe,CRMManagementService
    ,{
        provide: HTTP_INTERCEPTORS,
        useClass: UnauthorizedInterceptor,
        multi: true,
      }],
    bootstrap: [AppComponent],
})
export class AppModule {}

// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http);
}
