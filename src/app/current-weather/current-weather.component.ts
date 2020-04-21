import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SearchWeatherService } from '../search-weather.service';
import { Model } from '../model';
import { ModelFuture } from '../modelFuture';


@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {

  icon: any;
  infoApi: any;
  infoApi1: any;
  formWeather: any;
  city: any;

  model: Model[];
  model1: ModelFuture[];
  receptor: any;
  receptor1: any;
  
  receptor2: any;
  receptor3: any;
  receptor4: any;

  constructor(private weatherApi: SearchWeatherService) { }

  ngOnInit() {
    let cidade = 'city='
    this.formWeather = new FormGroup({
      city: new FormControl("", Validators.compose([
        Validators.required
      ]))
    })
    this.weatherApi.getWeather(cidade, "São Paulo").subscribe((resposta) => {
      this.infoApi = resposta;
      let resp = this.infoApi.data[0];
      this.receptor = new Model(
        resp.temp,
        resp.city_name,
        resp.datetime,
        resp.weather.description,
        resp.weather.icon,
        resp.sunrise,
        resp.sunset,
        resp.wind_spd,
        resp.rh
      )
    })
    this.weatherApi.getDaily("São Paulo").subscribe((resposta) => {
      this.infoApi1 = resposta;
      let resp1 = this.infoApi1.data[0];
      this.receptor1 = new ModelFuture(
        resp1.min_temp,
        resp1.temp,
        resp1.max_temp,
        resp1.weather.icon,
        resp1.description,
        resp1.valid_date
      )
      
    })
  }

  getCity(dataName) {
    this.city = dataName.city;
    let cidade = 'city='
    this.weatherApi.getWeather(cidade, this.city).subscribe((resposta) => {
      this.infoApi = resposta;
      let resp = this.infoApi.data[0];
      this.receptor = new Model(
        resp.temp,
        resp.city_name,
        resp.datetime,
        resp.weather.description,
        resp.weather.icon,
        resp.sunrise,
        resp.sunset,
        resp.wind_spd,
        resp.rh
      )
    })
    this.city = dataName.city;
    this.weatherApi.getDaily(this.city).subscribe((resposta) => {
      this.infoApi1 = resposta;
      let resp1 = this.infoApi1.data[0];
      this.receptor1 = new ModelFuture(
        resp1.min_temp,
        resp1.temp,
        resp1.max_temp,
        resp1.weather.icon,
        resp1.weather.description,
        resp1.datetime
      )
      let resp2 = this.infoApi1.data[1];
      this.receptor2 = new ModelFuture(
        resp2.min_temp,
        resp2.temp,
        resp2.max_temp,
        resp2.weather.icon,
        resp2.weather.description,
        resp2.datetime
      )
      let resp3 = this.infoApi1.data[2];
      this.receptor3 = new ModelFuture(
        resp3.min_temp,
        resp3.temp,
        resp3.max_temp,
        resp3.weather.icon,
        resp3.weather.description,
        resp3.datetime
      )
      let resp4 = this.infoApi1.data[3];
      this.receptor4 = new ModelFuture(
        resp4.min_temp,
        resp4.temp,
        resp4.max_temp,
        resp4.weather.icon,
        resp4.weather.description,
        resp4.datetime
      )
      console.log(this.receptor1)
      console.log(this.receptor2)
      console.log(this.receptor3)
      console.log(this.receptor4)
    })
  }
}
