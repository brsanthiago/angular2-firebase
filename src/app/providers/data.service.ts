import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {
  constructor(private af: AngularFire) { }

  push(path: string, data: any): Observable<any> {
    return Observable.create(observer => {
      this.af.database.list(path).push(data).then(firebaseData => {
        const fData: any = firebaseData;
        observer.next(fData.path.o[fData.path.o.length - 1]);
      }, error => {
        observer.error(error);
      });
    });
  }

  update(path: string, data: any) {
    this.af.database.object(path).update(data);
  }

  list(path: string): FirebaseListObservable<any> {
    return this.af.database.list(path);
  }

  object(path: string): FirebaseObjectObservable<any> {
    return this.af.database.object(path);
  }

  remove(path: string): Observable<any> {
    return Observable.create(observer => {
      this.af.database.object(path).remove().then(data => {
        observer.next();
      }, error => {
        observer.error(error);
      });
    });
  }

}
