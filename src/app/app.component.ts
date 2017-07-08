import { Component, Inject } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(@Inject('map') public map) {}

  title = 'search on map'
  welcome = 'Welcome!'
  welcomeCopy = 'Srart using app by entering your address above. Only latin characters and numbers allowed.'
}
