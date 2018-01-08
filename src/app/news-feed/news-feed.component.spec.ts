import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MatCardModule, MatToolbarModule, MatButtonModule, MatIconModule, MatIconRegistry} from '@angular/material';
import {NgArrayPipesModule, NgStringPipesModule} from 'angular-pipes';

import { FeedCardComponent } from '../feed-card/feed-card.component';
import {SpinnerComponent} from '../spinner/spinner.component';
import {NewsFeedComponent} from './news-feed.component';
import {FeedService} from '../feed.service';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Feed} from '../model/feed';
import { MockFeedService } from '../mock-feed.service'

describe('NewsFeedComponent', () => {
  let component: NewsFeedComponent;
  let fixture: ComponentFixture<NewsFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FeedCardComponent,
        NewsFeedComponent,
        SpinnerComponent],
      imports: [
        MatCardModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        NgArrayPipesModule,
        NgStringPipesModule
      ]
    });

    TestBed.overrideComponent(NewsFeedComponent, {
      set: {
        providers: [
          {provide: FeedService, useClass: MockFeedService}
        ]
      }
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



