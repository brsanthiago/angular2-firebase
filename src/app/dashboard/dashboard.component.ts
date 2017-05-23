import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { AuthProvider } from '../shared/providers/auth';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public aProvider: AuthProvider, private router: Router) {
    this.aProvider.af.auth.subscribe((auth => {
      if (!auth) {
        this.router.navigate(['login']);
      }
    }));
  }

  ngOnInit() {
  }

}
