//Internal libs (Angular Package)
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

//External libs and modules
import {AngularFireModule} from 'angularfire2';
import {ToastyModule} from 'ng2-toasty';

//Application Components
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

//Application Services & Models
import { DataProvider } from './shared/providers/data.service';
import { AuthProvider } from './shared/providers/auth';
import { AuthGuard } from './shared/providers/auth.service';
import { DashboardModule } from './dashboard/dashboard.module';

export const firebaseConfig = {
  apiKey: '<YOUR-FIREBASE-API-KEY-HERE>',
  authDomain: '<YOUR-APP-HERE>.firebaseapp.com',
  databaseURL: 'https://<YOUR-APP-HERE>.firebaseio.com',
  projectId: '<YOUR-APP-HERE>',
  storageBucket: '<YOUR-APP-HERE>.appspot.com',
  messagingSenderId: '<YOUR-APP-MESSAGE-SENDER-ID-HERE>'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    ToastyModule.forRoot(),
    DashboardModule,
    RouterModule.forRoot([])
  ],
  providers: [DataProvider, AuthGuard, AuthProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
