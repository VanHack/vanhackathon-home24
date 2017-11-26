import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { ArtistService } from '../artist.service';
import { Artist } from '../shared/artist.model';
import { Event } from '../shared/event.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  animations: [
    trigger(
      'simpleChange',
      [
        transition(
        ':enter', [
          style({transform: 'translateY(100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateY(0)', 'opacity': 1}))
        ]
      ),
      transition(
        ':leave', [
          style({transform: 'translateY(100%)', 'opacity': 1}),
          animate('500ms', style({transform: 'translateY(0)', 'opacity': 0})),
        ]
      )]
    )
  ],
})
export class ContentComponent implements OnInit, OnDestroy {
  @Input() artist: Artist;
  @Input() isCalendarSelected: boolean;
  subscription : any;

  constructor(private artistService: ArtistService) { }

  ngOnInit() {
    this.subscription = this.artistService.eventsChanged
      .subscribe(events => {
        this.artist.events = events;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
