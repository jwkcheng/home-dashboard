import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';


import {ClockComponent} from './clock.component';
import {ClockService} from '../clock.service';
import { MockClockService } from '../mock-clock.service'

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
});


