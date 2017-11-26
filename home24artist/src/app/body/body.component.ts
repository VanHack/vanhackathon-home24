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
  private noData: boolean = false;

  artist: Artist = null;

  constructor(private artistService: ArtistService) { }

  ngOnInit() {
    if(this.artistService.getActiveArtist()) {
      this.artist = this.artistService.getActiveArtist();
    }
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
                  if(this.artist.facebook){
                    this.artistService.getFacebookData(this.artist)
                      .subscribe(
                        (data) => {
                          this.isLoading = false;
                          this.artist.setFacebookData(data);
                        },
                        (err) => {
                          this.isLoading = false;
                          this.noData = true;
                        }
                      );
                  }
                  else {
                    this.isLoading = false;
                  }
                },
                (err) => {
                  this.isLoading = false;
                  this.noData = true;
                }
              );
          },
          (err) => {
            this.isLoading = false;
            this.noData = true;
          }
        );
    }
    else {
      this.artist = null;
    }
  }

}
