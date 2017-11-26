import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ArtistService } from '../artist.service';
import { Artist } from '../shared/artist.model';
import { Event } from '../shared/event.model';

@Component({
  selector: 'app-body-detail',
  templateUrl: './body-detail.component.html',
  styleUrls: ['./body-detail.component.scss']
})
export class BodyDetailComponent implements OnInit {
  private event: Event;
  private artist: Artist;

  constructor(private artistService: ArtistService, private router: Router) { }

  ngOnInit() {
    this.artist = this.artistService.getActiveArtist();
    this.event = this.artistService.getActiveEvent();
  }

  goBack() {
      this.router.navigate(['/']);
  }
}
