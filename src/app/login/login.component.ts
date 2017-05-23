import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {ToastyService, ToastyConfig, ToastyComponent, ToastOptions, ToastData} from 'ng2-toasty';

import { AuthProvider } from '../shared/providers/auth';

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

  register(event, name, email, password) {
    event.preventDefault();
    console.log('ENTROU');
    this.af.registerUser(email, password)
      .then((user) => {
        this.af.saveUser(user.uid, name, email).then(() => {
          this.onSuccess();
          this.router.navigate(['/home']);
        })
      .catch((error) => {
      this.onError(error);
      });
    })
    .catch((error) => {
      this.onError(`Error on create your account  ${error}`);
    });
  }

  ngOnInit() {
  }

  onSuccess() {
    const options: ToastOptions = {title: 'Success',
            msg: 'Your Account created successfully',
            showClose: true, timeout: this.timeout };
    this.toastyService.success(options);
  }

  onError(error: any) {
    const options: ToastOptions = {title: 'Ops...',
            msg: error,
            showClose: true, timeout: this.timeout };
    this.toastyService.error(options);
  }
}
