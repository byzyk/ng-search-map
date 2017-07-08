import { Component, OnInit, Inject } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(@Inject('map') private map) {}

  placeholder = 'Enter address'

  searchFormControl = new FormControl('', [Validators.required])
  formErrors = [{ type: 'required', text: 'Location cannot be empty' }]

  onSubmit(event, search) {
    event.preventDefault()

    if (search.valid) {
      this.map.search(search.value)
    }
  }

  ngOnInit() {}
}
