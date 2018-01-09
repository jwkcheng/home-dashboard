import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';


import {ClockComponent} from './clock.component';
import {ClockService} from './clock.service';
import { MockClockService } from './mock-clock.service'

describe('ClockComponent', () => {
  let component: ClockComponent;
  let fixture: ComponentFixture<ClockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClockComponent]
    });
    TestBed.overrideComponent(ClockComponent, {
      set: {
        providers: [
          {provide: ClockService, useClass: MockClockService}
        ]
      }
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get time', () => {
      let dateString = '2017-01-01T00:00:00';

      let clockService = fixture.debugElement.injector.get(ClockService);
      spyOn(clockService, 'getClock').and.returnValue(Observable.of(new Date(dateString)));

      component.ngOnInit();
      expect(clockService.getClock).toHaveBeenCalled();
      expect(component.time).toEqual(new Date(dateString));
  });

});


