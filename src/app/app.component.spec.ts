import {inject, TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {DragulaModule} from 'ng2-dragula';

import {NgArrayPipesModule, NgStringPipesModule} from 'angular-pipes';

import {WeatherComponent} from './weather/weather.component';
import {CalendarComponent} from './calendar/calendar.component';
import {ClockComponent} from './clock/clock.component';
import {StripHtmlTagsPipe} from './pipe/strip-html-tags.pipe';
import {SpinnerComponent} from './spinner/spinner.component';

import { SafePipe } from './safe.pipe';
import {FeedCardComponent} from './feed-card/feed-card.component';

import {MatCardModule, MatToolbarModule, MatButtonModule, MatIconModule, MatIconRegistry} from '@angular/material';
import {IpCameraComponent} from './ip-camera/ip-camera.component';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
    AppComponent,
    SafePipe,
    WeatherComponent,
    CalendarComponent,
    StripHtmlTagsPipe,
    SpinnerComponent,
    ClockComponent,
    FeedCardComponent,
    IpCameraComponent
      ],
      imports: [
          FormsModule,
          HttpModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    NgArrayPipesModule,
    NgStringPipesModule,
          DragulaModule
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});
