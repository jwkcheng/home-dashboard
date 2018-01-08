import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { WeatherComponent } from './weather.component';

import { SafePipe } from '../safe.pipe';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherComponent,
    SafePipe ],
      imports: [
          FormsModule
]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
