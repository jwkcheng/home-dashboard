import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  defaultCity = 'ab-52';
  currCity = this.defaultCity;
  currentUrl = '//weather.gc.ca/wxlink/wxlink.html?cityCode=' + this.currCity + '&amp;lang=e';

  constructor() {}

  ngOnInit() {
  }

  updateUrl() {
    this.currentUrl = '//weather.gc.ca/wxlink/wxlink.html?cityCode=' + this.currCity + '&amp;lang=e';
  }

  loadDefault() {
    this.currCity = this.defaultCity;
    this.currentUrl = '//weather.gc.ca/wxlink/wxlink.html?cityCode=' + this.currCity + '&amp;lang=e';
  }
}
