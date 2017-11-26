import { Component, OnInit, Input } from '@angular/core';

import { Event } from '../../shared/event.model';
import { Artist } from '../../shared/artist.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  @Input() events: Event[];
  @Input() artist: Artist;

  constructor() { }

  ngOnInit() {
  }

}
