import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms'; // <-- NgModel lives here

import {HttpModule} from '@angular/http';
import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

import {NgArrayPipesModule, NgStringPipesModule} from 'angular-pipes';
import {DragulaModule} from 'ng2-dragula';


import {AppComponent} from './app.component';
import {WeatherComponent} from './weather/weather.component';
import {CalendarComponent} from './calendar/calendar.component';
import {ClockComponent} from './clock/clock.component';
import {StripHtmlTagsPipe} from './pipe/strip-html-tags.pipe';
import {SpinnerComponent} from './spinner/spinner.component';

import {ServicesModule} from './services/services.module';
import {ClockService} from './clock.service';
import {FeedService} from './feed.service';

import {MatCardModule, MatToolbarModule, MatButtonModule, MatIconModule, MatIconRegistry} from '@angular/material';
import {IpCameraComponent} from './ip-camera/ip-camera.component';
import { SafePipe } from './safe.pipe';
import { NewsFeedComponent } from './news-feed/news-feed.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    CalendarComponent,
    SafePipe,
    StripHtmlTagsPipe,
    SpinnerComponent,
    ClockComponent,
    IpCameraComponent,
    NewsFeedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ServicesModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    NgArrayPipesModule,
    NgStringPipesModule,
    DragulaModule
  ],

  providers: [ClockService, FeedService, MatIconRegistry],
  bootstrap: [AppComponent]
})
export class AppModule {}
