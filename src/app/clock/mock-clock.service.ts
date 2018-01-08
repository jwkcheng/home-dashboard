import { Injectable } from '@angular/core';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

@Injectable()
export class MockClockService {

  getClock(): Observable<Date> {

    let dateString = '2018-01-01T00:00:00';
    return Observable.interval(1000).map(tick => new Date(dateString)).share();
  }
}
