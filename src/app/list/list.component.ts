import { Component, OnInit, Inject } from '@angular/core'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  constructor(@Inject('map') private map) {}

  isActive(item) {
    return item.place_id === this.map.activeId
  }

  ngOnInit() {}
}
