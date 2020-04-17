import { Component, OnInit } from '@angular/core';
import { CurrentWeatherComponent } from '../current-weather/current-weather.component';
/* import { ModelFuture } from '../app/modelFuture' */


@Component({
  selector: 'app-future-weather',
  templateUrl: './future-weather.component.html',
  styleUrls: ['./future-weather.component.scss']
})
export class FutureWeatherComponent extends CurrentWeatherComponent implements OnInit {

  // teste:any

  // constructor(infoApi: any) {
  //   super(infoApi);
  //   this.teste = this.infoApi;
    
  // }

//   constructor(nome:string,cor:string,cidade:string,liga:string,divisao:string){
//     super(nome,cor,cidade)
//     this.liga = liga;
//     this.divisao = divisao;
// }


  ngOnInit(): void {
  }

}
