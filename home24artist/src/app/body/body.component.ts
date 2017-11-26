import { Component, OnInit } from '@angular/core';

import { Artist } from '../shared/artist.model';
import { ArtistService } from '../artist.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  isLoading: boolean = false;
  isCalendar: boolean = false;
  firstLoad: boolean = true;

  artist: Artist = null;

  constructor(private artistService: ArtistService) { }

  ngOnInit() {
    if(this.artistService.getActiveArtist()) {
      this.artist = this.artistService.getActiveArtist();
    }
  }

  public calendarSelectChange(isSelected: boolean) {
    this.isCalendar = isSelected;
  }

  private errorLoading() {
    this.artistService.persistArtist(null);
    this.isLoading = false;
    console.log("Error");
  }

  public search(name: string) {
    this.firstLoad = false;
    let artist;
    if(name.length > 0 && name != '') {
      this.artist = null;
      this.isLoading = true;
      this.artistService.getArtist(name)
        .subscribe(
          (data) => {
            artist = new Artist();
            artist.setArtist(data);
            this.artistService.getEvents(name)
              .subscribe(
                (data) => {
                  artist.setEvents(data);
                  if(artist.facebook) {
                    this.artistService.getFacebookData(artist)
                      .subscribe(
                        (data) => {
                          artist.setFacebookData(data);
                          this.artistService.persistArtist(artist);
                          this.artist = artist;
                          this.isLoading = false;
                        },
                        (err) => this.errorLoading()
                      );
                  }
                  else {
                    this.artistService.persistArtist(artist);
                    this.artist = artist;
                    this.isLoading = false;
                  }
                },
                (err) => this.errorLoading()
              );
          },
          (err) => this.errorLoading()
        );
    }
    else {
      this.artistService.persistArtist(null);
      this.artist = null;
    }
  }

}
