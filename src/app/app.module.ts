import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms'; // <-- NgModel lives here

import {HttpModule} from '@angular/http';
import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

import {DragulaModule} from 'ng2-dragula';
import {StripHtmlTagsPipe} from './pipe/strip-html-tags.pipe';
import { SafePipe } from './safe.pipe';

import {AppComponent} from './app.component';
import {WeatherComponent} from './weather/weather.component';
import {CalendarComponent} from './calendar/calendar.component';
import {IpCameraComponent} from './ip-camera/ip-camera.component';

import { ClockModule } from './clock/clock.module';
import { NewsFeedModule } from './news-feed/news-feed.module';

@NgModule({
  declarations: [
    AppComponent,
    SafePipe,
    StripHtmlTagsPipe,
    WeatherComponent,
    CalendarComponent,
    IpCameraComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DragulaModule,
    ClockModule.forRoot(),
    NewsFeedModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
