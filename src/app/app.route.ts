import { Routes } from '@angular/router';

// dashboard
import { IndexComponent } from './index';
import { AppLayout } from './layouts/app-layout';
import { AuthLayout } from './layouts/auth-layout';
import { SearchComponent } from './pages/leads/search/search.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PostSignInComponent } from './Auth/post-sign-in/post-sign-in.component';
import { PostSignoutComponent } from './Auth/post-signout/post-signout.component';

export const routes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent, title: 'Dashboard | MB' },
            { path: 'leads', component: SearchComponent, title: 'Leads | MB' },






            { path: 'sign-in', component: PostSignInComponent },
            { path: 'sign-out', component: PostSignoutComponent },

        ],
    },

    {
        path: '',
        component: AuthLayout,
        children: [
            { path: '', loadChildren: () => import('./errors/errors.module').then((d) => d.ErrorsModule) },
        ],
    },
];
