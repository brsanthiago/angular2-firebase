import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthProvider } from './shared/providers/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public aProvider: AuthProvider, private router: Router) {
    this.aProvider.af.auth.subscribe((auth => {
      if (!auth) {
        this.router.navigate(['login']);
      } else {
        this.router.navigate(['']);
      }
    }));
  }
}
