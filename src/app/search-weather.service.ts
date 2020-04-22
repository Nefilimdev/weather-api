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
  private key = 'country=BR&lang=pt&key=58123a3239384781a869eebd1633cdcf'
  
  private apiFuture = "https://api.weatherbit.io/v2.0/forecast/daily?key=07c15d71e0ff441d9d0ae6bcb6a4b55f&lang=pt&days=4&country=BR&city="

  getWeather(cityOrZip, searchValue): Observable<Model[]>{
    return this.apiUrl.get<Model[]>(this.baseUrl+`${cityOrZip}${searchValue}&${this.key}`)
  }


   getDaily(nomeCidade): Observable<ModelFuture[]>{
     return this.apiUrl.get<ModelFuture[]>(this.apiFuture + nomeCidade)
   } 
}

