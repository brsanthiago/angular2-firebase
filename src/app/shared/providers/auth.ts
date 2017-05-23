import { Injectable } from '@angular/core';

import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { FirebaseObjectFactoryOpts } from 'angularfire2/interfaces';

import { Observable } from 'rxjs/Observable';
// Providers
import { DataProvider } from './data.service';

@Injectable()
export class AuthProvider {
    public messages: FirebaseListObservable<any>;
    public users: FirebaseListObservable<any>;
    public name: string;
    public email: string;
    public photoUrl: string;
    public uid: string;
    public user: FirebaseObjectObservable<any>;

    constructor(public af: AngularFire, private data: DataProvider) {
        this.af.auth.subscribe(auth => {
            if (auth) {
                this.user = this.af.database.object('users/' + auth.uid);
            }
        });
    }
    /**
     * @param email
     * @param password
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
     * @param uid
     * @param name
     * @param email
     * @returns {firebase.Promise<void>}
     **/
    saveUser(uid, name, email) {
        return this.af.database.object('users/' + uid).set({
            name: name,
            email: email,
        });
    }
    logout() {
        this.af.auth.logout();
    }
}
