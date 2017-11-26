import { Event } from './event.model';

class Facebook {
  public url: string;
  public likes: number;
  public genre: string;
  public website: string;
}

export class Artist {
  name: string;
  imageUrl: string;
  facebook: Facebook;
  events: Event[];

  public setArtist(data: any) {
    if(data){
      this.name = data.name;
      this.imageUrl = data.thumb_url;

      if(data.facebook_page_url){
        this.facebook = new Facebook();
        this.facebook.url = data.facebook_page_url;
      }
      return true;
    }
    else{
      return false;
    }
  }

  public setEvents(data: any) {
    this.events = new Array<Event>();
    if(data) {
      for(let e of data) {
        let event = new Event();
        event.setEvent(e);
        this.events.push(event);
      }
      return true;
    }
    else {
      return false
    }
  }

  public setFacebookData(data: any) {
    if(data){
      if(data.fan_count) {
        this.facebook.likes = Number(data.fan_count);
      }

      if(data.genre) {
        this.facebook.genre = data.genre;
      }

      if(data.website) {
        this.facebook.website = data.website;
      }
    }
  }

}
