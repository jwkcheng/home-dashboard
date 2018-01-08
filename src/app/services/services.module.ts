import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockService } from '../clock.service';
import { FeedService } from '../feed.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ClockService, FeedService]
})
export class ServicesModule { }
