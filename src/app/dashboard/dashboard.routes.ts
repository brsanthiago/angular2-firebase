import { Route } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from '../login/login.component';

import { AuthGuard } from '../shared/providers/auth.service';

export const MODULE_ROUTES: Route[] = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
     { path: '', redirectTo: 'home', pathMatch: 'full' }
];

export const MODULE_COMPONENTS = [ HomeComponent ];
