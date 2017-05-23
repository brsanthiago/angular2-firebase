import { Component, OnInit } from '@angular/core';

import { AuthProvider } from '../../shared/providers/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private af: AuthProvider) { }

  ngOnInit() {
  }
  logout() {
    this.af.logout();
  }
}
