import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SpinnerComponent} from '../spinner/spinner.component';
import {MatCardModule, MatToolbarModule, MatButtonModule, MatIconModule, MatIconRegistry} from '@angular/material';
import {NgArrayPipesModule, NgStringPipesModule} from 'angular-pipes';

import { FeedService } from './feed.service';
import { NewsFeedComponent } from './news-feed.component';
import { FeedCardComponent } from '../feed-card/feed-card.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    NgArrayPipesModule,
    NgStringPipesModule
  ],
  declarations: [
    NewsFeedComponent,
    FeedCardComponent,
    SpinnerComponent
  ],
  providers: [FeedService,MatIconRegistry],
  exports: [NewsFeedComponent]
})
export class NewsFeedModule {}
