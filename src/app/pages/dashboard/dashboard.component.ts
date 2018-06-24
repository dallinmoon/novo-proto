import { Component, OnInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { GSheetService } from '../../services/gsheet.service';
import { WeatherService } from '../../services/weather.service';
import { Chart } from 'chart.js';

declare var Plotly: any;

interface DataResponse {
  rows: any;
  site: string;
  address: string;
  usage1: string;
}

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  @ViewChild('chart') el: ElementRef;
  //modalRef: BsModalRef;

  weatherData: any;
  weatherDataLastYear: any;
  myData: any;
  gs: any;
  gsDashboard: any;
  gsMeters: any;
  gsCalc: any;
  chart = [];

  constructor(private router: Router, private http: HttpClient, private _gsheet: GSheetService, private _weather: WeatherService) {
  }

  dataReady: boolean = false;
  gsDashboardDataReady: boolean = false;
  weatherDataReady: boolean = false;

  ngOnInit(): void {

    this._gsheet.gDashboard().subscribe(res => {
      this.gsDashboard = res;
      this.gsDashboardDataReady = true;
    });

    this._weather.dailyForecast()
      .subscribe(res => {
        this.weatherData = res;
        this.weatherDataReady = true;

        let date1 = new Date(res.daily.data[0].time * 1000);
        let date2 = new Date(res.daily.data[1].time * 1000);
        let date3 = new Date(res.daily.data[2].time * 1000);
        let date4 = new Date(res.daily.data[3].time * 1000);
        let date5 = new Date(res.daily.data[4].time * 1000);
        let date6 = new Date(res.daily.data[5].time * 1000);
        let date7 = new Date(res.daily.data[6].time * 1000);

        let date1day = date1.getDate();
        let date2day = date2.getDate();
        let date3day = date3.getDate();
        let date4day = date4.getDate();
        let date5day = date4.getDate();
        let date6day = date5.getDate();
        let date7day = date6.getDate();

        function formatDate(date) {

          var dayNames = [
            "Sun", "Mon", "Tue",
            "Wed", "Thu", "Fri", "Sat"
          ];

          var dayIndex = date.getDay();

          return dayNames[dayIndex];
        }

        res.day1 = formatDate(date1);
        res.day2 = formatDate(date2);
        res.day3 = formatDate(date3);
        res.day4 = formatDate(date4);
        res.day5 = formatDate(date5);
        res.day6 = formatDate(date6);
        res.day7 = formatDate(date7);

        let day1SunriseTime = new Date(res.daily.data[0].sunriseTime * 1000);
        let day1SunsetTime = new Date(res.daily.data[0].sunsetTime * 1000);

        function formatTime(date) {

          var timeHours = date.getHours();
          var timeMinutes = date.getMinutes();

          return timeHours + ":" + timeMinutes;
        }

        res.day1SunriseTime = formatTime(day1SunriseTime);
        res.day1SunsetTime = formatTime(day1SunsetTime);

        let day1Icon = res.daily.data[0].icon;
        let day2Icon = res.daily.data[1].icon;
        let day3Icon = res.daily.data[2].icon;
        let day4Icon = res.daily.data[3].icon;
        let day5Icon = res.daily.data[4].icon;
        let day6Icon = res.daily.data[5].icon;
        let day7Icon = res.daily.data[6].icon;

        function wiIcon(icon){
          if (icon === "partly-cloudy-day"){
            return "wi-day-cloudy";
          } else if (icon === "snow") {
            return "wi-snow";
          } else if (icon === "partly-cloudy-night") {
            return "wi-night-alt-cloudy";
          } else if (icon === "rain") {
            return "wi-rain";
          } else if (icon === "clear-day") {
            return "wi-day-sunny";
          } else if (icon === "clear-night") {
            return "wi-night-clear";
          } else if (icon === "sleet") {
            return "wi-sleet";
          } else if (icon === "wind") {
            return "wi-strong-wind";
          } else if (icon === "fog") {
            return "wi-fog";
          } else if (icon === "cloudy") {
            return "wi-cloudy";
          } else {
            return "wi-day-sunny";
          }
        }

        res.day1Icon = wiIcon(day1Icon);
        res.day2Icon = wiIcon(day2Icon);
        res.day3Icon = wiIcon(day3Icon);
        res.day4Icon = wiIcon(day4Icon);
        res.day5Icon = wiIcon(day5Icon);
        res.day6Icon = wiIcon(day6Icon);
        res.day7Icon = wiIcon(day7Icon);

        let day1WindDirection = res.daily.data[0].windBearing;

        function windDirection(windBearing){
          if (windBearing > 337 || windBearing < 24){
            return "N";
          } else if (windBearing > 23 && windBearing < 69) {
            return "NE";
          } else if (windBearing > 68 && windBearing < 114) {
            return "E";
          } else if (windBearing > 113 && windBearing < 159) {
            return "SE";
          } else if (windBearing > 158 && windBearing < 204) {
            return "S";
          } else if (windBearing > 203 && windBearing < 248) {
            return "SW";
          } else if (windBearing > 247 && windBearing < 295) {
            return "W";
          } else if (windBearing > 294 && windBearing < 338) {
            return "NW";
          }
        }

        res.day1WindDirection = windDirection(day1WindDirection);

      })

    this._weather.weatherDataLastYear()
      .subscribe(res => {
        this.weatherDataLastYear = res;

        const highLastYear = res.daily.data[0].temperatureHigh;
        const lowLastYear = res.daily.data[0].temperatureLow;

    });
  }
}
