import { Route } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from '../pages/login/login.component';
import { RegisterComponent } from '../pages/register/register.component';

import { AuthGuard } from '../shared/providers/auth.service';

export const MODULE_ROUTES: Route[] = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
     { path: '', redirectTo: 'home', pathMatch: 'full' }
];

export const MODULE_COMPONENTS = [ HomeComponent ];
