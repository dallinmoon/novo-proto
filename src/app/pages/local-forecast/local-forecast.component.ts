import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { WeatherService } from '../../services/weather.service';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { Chart } from 'chart.js';

@Component({
  templateUrl: './local-forecast.component.html'
})
export class LocalForecastComponent implements OnInit {

  weatherData: any;
  chart = []; // This will hold our chart info

  constructor(private _weather: WeatherService) { }

  ngOnInit() {
    this._weather.dailyForecast()
      .subscribe(res => {
        this.weatherData = res;

        console.log(res);
        console.log(res.daily.data[0].time);

        console.log(res.daily.summary);

        let date1 = res.daily.data[0].time;
        let date1ms = new Date(date1 * 1000);

        console.log(date1ms);

        let date1day = date1ms.getDate();

        console.log(date1day);

        function formatDate(date) {

          var dayNames = [
            "Sun", "Mon", "Tue",
            "Wed", "Thu", "Fri", "Sat"
          ];

          var dayIndex = date.getDay();

          return dayNames[dayIndex];
        }

        console.log (formatDate(date1ms))

      })
  }

}
