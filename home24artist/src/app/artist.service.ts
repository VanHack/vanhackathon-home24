import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Artist } from './shared/artist.model';
import { Event } from './shared/event.model';

const API_URL = "https://rest.bandsintown.com/";
const APP_ID = "?app_id=home24artist";

@Injectable()
export class ArtistService {

  eventsChanged = new EventEmitter<Event[]>();

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
    let facebookName;
    if(splited[splited.length-1].length > 0){
      facebookName = splited[splited.length - 1];
    }
    else {
      facebookName = splited[splited.length - 2];
    }

    let url = 'https://graph.facebook.com/' + facebookName  + '/?fields=fan_count,genre,website' + token;

    return this.http.get(url);
  }

  // Function to compare the 2 events by the date
  private compareDates(e1: Event, e2: Event, order: string) {
    // order can be: (none), dateasc. datedesc
    let date1 = new Date(e1.date);
    let date2 = new Date(e2.date);

    if(order == '(none)' || order == 'asc') {
      return date1.getTime() - date2.getTime();
    }
    else {
      return date2.getTime() - date1.getTime();
    }

  }

  // Function to emit when order of files change
  public onChangeEventsOrder(order: string) {
    if(this.activeArtist) {
      // Sort using the function to compare the Dates
      this.activeArtist.events.sort((e1, e2) => this.compareDates(e1, e2, order));
      this.eventsChanged.emit(this.activeArtist.events);
    }
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
