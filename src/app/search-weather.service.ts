import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Model } from '../app/model'
import { ModelFuture } from '../app/modelFuture'

@Injectable({
  providedIn: 'root'
})
export class SearchWeatherService {

  constructor(private apiUrl: HttpClient) { }

  nomeCidade;

  private baseUrl = 'http://api.weatherbit.io/v2.0/current?'
  /* private dailyUrl = 'https://www.weatherbit.io/api/weather-history-daily' */
  private key = 'country=BR&lang=pt&key=bbeda0024d734db4a8a7b7eb12cf509e'
  
  private apiFuture = "https://api.weatherbit.io/v2.0/forecast/daily?key=33e81a0b929a42cf912fc0769d35d4c9&lang=pt&days=4&country=BR&city="

  getWeather(cityOrZip, searchValue): Observable<Model[]>{
    return this.apiUrl.get<Model[]>(this.baseUrl+`${cityOrZip}${searchValue}&${this.key}`)
  }


   getDaily(nomeCidade): Observable<ModelFuture[]>{
     return this.apiUrl.get<ModelFuture[]>(this.apiFuture + nomeCidade)
   } 
}

