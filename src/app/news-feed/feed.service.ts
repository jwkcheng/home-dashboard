import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Feed} from '../model/feed';

@Injectable()
export class FeedService {

  private apiKey = 'mhjgwz4wcisfpiz6wbv1psbsnojvbstm0wxvw5ei';
  private rssToJsonServiceBaseUrl = 'https://api.rss2json.com/v1/api.json?api_key=' + this.apiKey + '&rss_url=';


  constructor(
    private http: Http
  ) {}

  getFeedContent(url: string): Observable<Feed> {
    return this.http.get(this.rssToJsonServiceBaseUrl + url)
      .map(this.extractFeeds)
      .catch(this.handleError);
  }

  private extractFeeds(res: Response): Feed {
    const feed = res.json();
    return feed || {};
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
