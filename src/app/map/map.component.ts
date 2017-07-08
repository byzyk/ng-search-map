import { Component, OnInit, Inject, Input } from '@angular/core'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
@Input()
export class MapComponent implements OnInit {
  constructor(@Inject('map') private map) {}

  iconPath = 'assets/pin.png'

  ngOnInit() {}
}
