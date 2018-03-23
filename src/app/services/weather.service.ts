import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

interface WeatherResponse {
  daily: any;
  data: any;
  time: number;
  day1: string;
  day2: string;
  day3: string;
  day4: string;
  day5: string;
  day6: string;
  day7: string;
  day1Icon: any;
  day2Icon: any;
  day3Icon: any;
  day4Icon: any;
  day5Icon: any;
  day6Icon: any;
  day7Icon: any;
  day1WindDirection: string;
  day1SunriseTime: string;
  day1SunsetTime: string;
}

var ts = new Date(new Date().setFullYear(new Date().getFullYear() - 1));
var todayLastYear = Math.round((ts).getTime() / 1000);

@Injectable()
export class WeatherService {

  constructor(private _http: HttpClient) { }

  dailyForecast() {
    return this._http.get<WeatherResponse>("https://crossorigin.me/https://api.darksky.net/forecast/f3a1d8ca5d248c7a75ab066be5b979f1/37.5758681,-77.5409744")
      .map(result => result);
  }

  weatherDataLastYear() {
    return this._http.get<WeatherResponse>("https://crossorigin.me/https://api.darksky.net/forecast/f3a1d8ca5d248c7a75ab066be5b979f1/37.5758681,-77.5409744," + todayLastYear)
      .map(result => result);
  }

}
