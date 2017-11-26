import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Artist } from './shared/artist.model';
import { Event } from './shared/event.model';

const API_URL = "https://rest.bandsintown.com/";
const APP_ID = "?app_id=home24artist";

@Injectable()
export class ArtistService {

  actoveArtistChanged = new EventEmitter<Artist>();
  activeEventChanged = new EventEmitter<Event>();

  private activeArtist: Artist;
  private activeEvent: Event;

  constructor(private http: HttpClient){};

  public getArtist(name: string){
    let url = API_URL + 'artists/' + encodeURIComponent(name) + APP_ID;
    return this.http.get(url);
  }

  public getEvents(name: string){
    let url = API_URL + 'artists/' + encodeURIComponent(name) + '/events' + APP_ID;
    return this.http.get(url);
  }

  public getFacebookData(artist: Artist) {
    let token = "&access_token=1755600874484783|xTZ6r0hDJ5W4xSDrfQvBR9z5FVA";
    let splited = artist.facebook.url.split('/');
    // Get the last part of the string to query it
    let facebookName = splited[splited.length-1];
    let url = 'https://graph.facebook.com/' + facebookName  + '/?fields=fan_count,genre,website' + token;

    return this.http.get(url);
  }

  public persistArtist(artist: Artist){
    this.activeArtist = artist;
  }

  public persistEvent(event: Event) {
    this.activeEvent = event;
  }

  public getActiveArtist() {
    return this.activeArtist;
  }

  public getActiveEvent() {
    return this.activeEvent;
  }
}
