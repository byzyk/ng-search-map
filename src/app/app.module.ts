import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpModule } from '@angular/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MapService } from './map.service'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {
  MdButtonModule,
  MdIconModule,
  MdToolbarModule,
  MdInputModule,
  MdListModule,
  MdCardModule,
  MdProgressSpinnerModule
} from '@angular/material'
import { AgmCoreModule } from '@agm/core'

import { AppComponent } from './app.component'
import { SearchComponent } from './search/search.component'
import { ListComponent } from './list/list.component'
import { MapComponent } from './map/map.component'

import { API_KEY as apiKey } from '../config'

@NgModule({
  declarations: [AppComponent, SearchComponent, ListComponent, MapComponent],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey
    }),
    BrowserAnimationsModule,
    MdButtonModule,
    MdIconModule,
    MdToolbarModule,
    MdInputModule,
    MdListModule,
    MdCardModule,
    MdProgressSpinnerModule
  ],
  providers: [{ provide: 'map', useClass: MapService }],
  bootstrap: [AppComponent]
})
export class AppModule {}
