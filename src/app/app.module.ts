//Internal libs (Angular Package)
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//External libs and modules
import {AngularFireModule} from 'angularfire2';

//Application Components
import { AppComponent } from './app.component';
import { AuthService } from './providers/auth.service';
import { DataService } from './providers/data.service';

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
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [AuthService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
