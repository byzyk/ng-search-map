import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { API_KEY } from '../config'

@Injectable()
export class MapService {
  constructor(private http: Http) {}

  private extractData(res: Response) {
    let body = res.json()
    return body || {}
  }

  private handleError(error: Response | any) {
    let errMsg: string
    if (error instanceof Response) {
      const body = error.json() || ''
      const err = body.error || JSON.stringify(body)
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`
    } else {
      errMsg = error.message ? error.message : error.toString()
    }

    console.error(errMsg)

    return Observable.throw(errMsg)
  }

  private url: string = `https://maps.googleapis.com/maps/api/geocode/json?key=${API_KEY}&address=`

  loading: boolean = false
  loaded: boolean = false
  valid: boolean = false
  locations: Array<Object> = []
  lat: number = 0
  lng: number = 0
  activeId: string = ''
  errors: Array<Object> = []

  isErrors() {
    return this.errors.length
  }

  private addError(type, text) {
    this.errors = [
      ...this.errors,
      {
        type,
        text
      }
    ]
    console.error(`ERROR: <${type}> ${text}`)
  }

  clearErrors() {
    this.errors = []
  }

  search(term: string) {
    this.loading = true
    this.loaded = false
    this.valid = false
    this.locations = []
    this.activeId = ''

    this.clearErrors()

    return this.http
      .get(this.url + term)
      .map(this.extractData)
      .catch(this.handleError)
      .subscribe(
        data => {
          if (data.status === 'OK') {
            this.locations = data.results
            this.move(data.results[0])
          } else {
            this.addError(
              'noResults',
              'No address found, please try another address.'
            )
          }
        },
        error => {
          this.addError('badRequest', 'Error during request.')
        },
        () => {
          this.loading = false
          this.loaded = true
        }
      )
  }

  move(item) {
    if (!this.valid) this.valid = true
    if (item.place_id !== this.activeId) {
      const { lat, lng } = item.geometry.location
      this.lat = lat
      this.lng = lng
      this.activeId = item.place_id
    }
  }
}
