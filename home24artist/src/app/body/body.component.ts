import { Component, OnInit } from '@angular/core';

import { Artist } from '../shared/artist.model';
import { ArtistService } from '../artist.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  private isLoading: boolean = false;
  artist: Artist = null;

  constructor(private artistService: ArtistService) { }

  ngOnInit() {
  }

  private search(name: string) {
    if(name.length > 0 && name != '') {
      this.artist = null;
      this.isLoading = true;
      this.artistService.getArtist(name)
        .subscribe(
          (data) => {
            this.artist = new Artist();
            this.artist.setArtist(data);
            this.artistService.getEvents(name)
              .subscribe(
                (data) => {
                  this.artist.setEvents(data);
                  this.isLoading = false;
                },
                (err) => {
                  console.log("An error has ocurred", err);
                }
              );
          },
          (err) => {
            console.log(null);
          }
        );
    }
    else {
      this.artist = null;
    }
  }

}
