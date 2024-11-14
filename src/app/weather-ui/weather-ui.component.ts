import {Component, OnInit} from '@angular/core';
import {IWeather} from "../interfaces/iweather.interface";
import {WeatherAPIService} from "../weather-api.service";

@Component({
  selector: 'app-weather-ui',
  templateUrl: './weather-ui.component.html',
  styleUrls: ['./weather-ui.component.scss'],
})

export class WeatherUIComponent implements OnInit {
  public city: string;
  public weather: any;

  public weatherData!: IWeather;

  constructor(private weatherApiService: WeatherAPIService) {
    this.city = "Grodno"
  }

  ngOnInit() {
    this.showWeather()
  }

  showWeather() {
    this.weatherApiService.getWeatherByCity(this.city).subscribe(
      (data) => {
        this.weatherData = data;
      }
    )
  }
}
