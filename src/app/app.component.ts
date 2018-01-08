import { Component, OnInit } from '@angular/core';
import { FeedService } from './feed.service';

import { FeedEntry } from './model/feed-entry';

// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  private feedUrl  = 'https%3A%2F%2Frss.cbc.ca%2Flineup%2Fcanada-calgary.xml';
  private feeds: any;

  constructor (
    private feedService: FeedService
  ) {}

  ngOnInit() {
    this.refreshFeed();
  }

  private refreshFeed() {
    this.feedService.getFeedContent(this.feedUrl)
        .subscribe(
            feed => this.feeds = feed.items,
            error => console.log(error));
  }
}
