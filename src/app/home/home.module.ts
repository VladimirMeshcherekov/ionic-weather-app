import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {WeatherUIComponent} from "../weather-ui/weather-ui.component";
import {K2CTemperatureConverterPipe} from "../pipes/k2-ctemperature-converter.pipe";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    K2CTemperatureConverterPipe
  ],
    declarations: [HomePage, WeatherUIComponent]
})
export class HomePageModule {}
