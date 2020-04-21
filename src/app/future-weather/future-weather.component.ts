import { Component, OnInit, Input } from '@angular/core';
/* import { ModelFuture } from '../app/modelFuture' */


@Component({
  selector: 'app-future-weather',
  templateUrl: './future-weather.component.html',
  styleUrls: ['./future-weather.component.scss']
})
export class FutureWeatherComponent implements OnInit {


  @Input() receptor2: any;
  @Input() receptor3: any;
  @Input() receptor4: any;
  @Input() infoApi1:any;
  @Input() data:any;


  constructor() { }
  ngOnInit(): void { }

}
