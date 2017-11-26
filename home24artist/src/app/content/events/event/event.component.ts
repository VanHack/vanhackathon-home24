import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ArtistService } from '../../../artist.service';
import { Event } from '../../../shared/event.model';
import { Artist } from '../../../shared/artist.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})

export class EventComponent {
  @Input() event: Event;
  @Input() artist: Artist;

  constructor(private router: Router, private artistService: ArtistService) { }

  onClick() {
    this.artistService.persistEvent(this.event);
    this.artistService.persistArtist(this.artist);
    this.router.navigate(['/detail']);
  }


}
