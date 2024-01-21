import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// icon
import { IconModule } from 'src/app/shared/icon/icon.module';

import { ContactUsBoxedComponent } from './contact-us-boxed';
import { ContactUsCoverComponent } from './contact-us-cover';
import { ComingSoonBoxedComponent } from './coming-soon-boxed';
import { ComingSoonCoverComponent } from './coming-soon-cover';
import { Error404Component } from './error404';
import { Error500Component } from './error500';
import { Error503Component } from './error503';
import { MaintenenceComponent } from './maintenence';

// headlessui
import { MenuModule } from 'headlessui-angular';
import { Error401Component } from './error401';

const routes: Routes = [
    { path: 'contact-us-boxed', component: ContactUsBoxedComponent, title: 'Contact Us Boxed | MBState' },
    { path: 'contact-us-cover', component: ContactUsCoverComponent, title: 'Contact Us Cover | MBState' },
    { path: 'coming-soon-boxed', component: ComingSoonBoxedComponent, title: 'Coming Soon Boxed | MBState' },
    { path: 'coming-soon-cover', component: ComingSoonCoverComponent, title: 'Coming Soon Cover | MBState' },
    { path: 'error404', component: Error404Component, title: 'Error 404 | MBState' },
    { path: 'error500', component: Error500Component, title: 'Error 500 | MBState' },
    { path: 'error503', component: Error503Component, title: 'Error 503 | MBState' },
    { path: 'error401', component: Error401Component, title: 'Error 401 | MBState' },
    { path: 'maintenence', component: MaintenenceComponent, title: 'Maintenence | MBState' },
];
@NgModule({
    imports: [RouterModule.forChild(routes), CommonModule, MenuModule, IconModule],
    declarations: [
        ContactUsBoxedComponent,
        ContactUsCoverComponent,
        ComingSoonBoxedComponent,
        ComingSoonCoverComponent,
        Error404Component,
        Error500Component,
        Error503Component,
        MaintenenceComponent,
    ],
})
export class ErrorsModule {}
