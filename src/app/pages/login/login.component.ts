import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {ToastyService, ToastyConfig, ToastyComponent, ToastOptions, ToastData} from 'ng2-toasty';

import { AuthProvider } from '../../shared/providers/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private toastOptions: ToastOptions;
  private timeout = 8000;

  constructor(private af: AuthProvider, private router: Router,
  private toastyService: ToastyService) {
    console.log('INICIOU');
   }

  login(event, email, password) {
    event.preventDefault();
    this.af.registerUser(email, password)
      .then((user) => {
        this.af.saveUser(user.uid, name, email).then(() => {
          this.router.navigate(['/home']);
        })
      .catch((error) => {
      this.onError(error);
      });
    })
    .catch((error) => {
      this.onError(`Error on login  ${error}`);
    });
  }

  ngOnInit() {
  }

  onError(error: any) {
    const options: ToastOptions = {title: 'Ops...',
            msg: error,
            showClose: true, timeout: this.timeout };
    this.toastyService.error(options);
  }
}
