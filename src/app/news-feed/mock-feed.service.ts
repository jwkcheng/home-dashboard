import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Feed} from '../model/feed';

@Injectable()
export class MockFeedService {
  getFeedContent(url: string): Observable<Feed> {
    const testFeed = '{ "status":"ok", "feed":{ "url":"https://notarealurl.com", "title":"Test Feed", "link":"https://notarealurl.com/", "author":"", "description":"Test Stuff", "image":"" }, "items":[ { "title":"Article 1", "pubDate":"2018-01-08 02:16:25", "link":"https://google.ca", "author":"", "thumbnail":"", "description":"Blah Blah Blah", "content":"blah, blah, blah", "enclosure":[ ], "categories":[ ] }, { "title":"Article 2", "pubDate":"2018-01-08 02:16:25", "link":"https://google.ca", "author":"", "thumbnail":"", "description":"Blah Blah Blah", "content":"blah, blah, blah", "enclosure":[ ], "categories":[ ] }, { "title":"Article 3", "pubDate":"2018-01-08 02:16:25", "link":"https://google.ca", "author":"", "thumbnail":"", "description":"Blah Blah Blah", "content":"blah, blah, blah", "enclosure":[ ], "categories":[ ] } ]}';
    return Observable.of(JSON.parse(testFeed));
  }
}
