import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Artist } from './shared/artist.model';

const API_URL = "https://rest.bandsintown.com/";
const APP_ID = "?app_id=home24artist";

@Injectable()
export class ArtistService {

  constructor(private http: HttpClient){};

  public getArtist(name: string){
    let url = API_URL + 'artists/' + encodeURIComponent(name) + APP_ID;
    return this.http.get(url);
  }

  public getEvents(name: string){
    let url = API_URL + 'artists/' + encodeURIComponent(name) + '/events' + APP_ID;
    return this.http.get(url);
  }
}
