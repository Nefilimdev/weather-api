import { Component, OnInit, Input } from '@angular/core';
import { SearchWeatherService } from '../search-weather.service';
import { Model } from '../model';


@Component({
  selector: 'app-today-weather',
  templateUrl: './today-weather.component.html',
  styleUrls: ['./today-weather.component.scss']
})
export class TodayWeatherComponent implements OnInit {


  @Input() data:any;
  @Input() data1:any;
  @Input() infoApi1:any;

  
  constructor(private weatherApi: SearchWeatherService) { }

  ngOnInit(): void { }
  
}









