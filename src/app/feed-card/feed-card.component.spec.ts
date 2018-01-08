import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedCardComponent } from './feed-card.component';

import { MockFeedService } from '../mock-feed.service'

import {MatCardModule, MatToolbarModule, MatButtonModule, MatIconModule, MatIconRegistry} from '@angular/material';

describe('FeedCardComponent', () => {
  let component: FeedCardComponent;
  let fixture: ComponentFixture<FeedCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedCardComponent ],
      imports: [
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
