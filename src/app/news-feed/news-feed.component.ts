import { Component, OnInit } from '@angular/core';

import { FeedCardComponent } from '../feed-card/feed-card.component';
import { FeedService } from './feed.service';
import { FeedEntry } from '../model/feed-entry';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {


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
