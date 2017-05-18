import { Injectable } from '@angular/core';
import {AngularFire, AuthProviders, AuthMethods, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import {FirebaseObjectFactoryOpts} from 'angularfire2/interfaces';

import { Observable } from 'rxjs/Observable';

import {DataService} from './data.service';

@Injectable()
export class AuthService {
public messages: FirebaseListObservable<any>;
    public users: FirebaseListObservable<any>;
    public name: string;
    public email: string;
    public photoUrl: string;
    public uid: string;
    public user: FirebaseObjectObservable<any>;

    constructor(public af: AngularFire, private data: DataService) {
        this.af.auth.subscribe(auth => {
            if (auth) {
                this.user = this.af.database.object('users/' + auth.uid);
            }
        });
    }

    /**
     * Logs the user in using their Email/Password combo
     * @param email
     * @param password
     * @returns {firebase.Promise<FirebaseAuthState>}
     **/
    login(email: string, password: string) {
        return Observable.create(observer => {
            this.af.auth.login({
                provider: AuthProviders.Password,
                method: AuthMethods.Password
            }).then(user => {
                console.log(user);
                observer.next();
            }).catch((error) => {
                observer.error(error);
            });
        });
    }

    /**
     * @param model
     * @returns {firebase.Promise<void>}
     **/
    registerUser(email, password) {
        console.log(email);
        return this.af.auth.createUser({
            email: email,
            password: password
        });
    }
    /**
     *  @param uid
     * @param model
     * @returns {firebase.Promise<void>}
     **/
    saveUserInfoFromForm(uid, name, email) {
        return this.af.database.object('users/' + uid).set({
            name: name,
            email: email,
        });
    }
    logout() {
        this.af.auth.logout();
    }
}
