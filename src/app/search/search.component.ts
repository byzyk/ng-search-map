import { Component, OnInit, Inject, Input } from '@angular/core'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  placeholder = 'Enter location'

  onSubmit(event, term) {
    event.preventDefault()

    this.map.search(term)
    this.term = ''
  }

  @Input() term = ''

  constructor(@Inject('map') private map) {}

  ngOnInit() {}
}
