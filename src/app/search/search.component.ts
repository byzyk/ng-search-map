import { Component, OnInit, Inject } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(@Inject('map') public map) {}

  placeholder = 'Enter address'

  private onlyEng = /[A-Za-z0-9]/

  searchFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(this.onlyEng)
  ])
  formErrors = [
    { type: 'required', text: 'Address cannot be empty' },
    { type: 'pattern', text: 'Only English allowed' }
  ]

  onSubmit(event, search) {
    event.preventDefault()

    if (search.valid) {
      this.map.search(search.value)
    }
  }

  ngOnInit() {}
}
