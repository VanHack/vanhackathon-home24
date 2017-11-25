class Venue {
  public name: string;
  public city: string;
  public region: string;
  public country: string;
  public longitude: number;
  public latitude: number;
}

export class Event {
  date: string;
  venue: Venue;
  status: string;

  public setEvent(event: any){
    if(event) {
      this.date = event.datetime;
      this.venue = new Venue();
      this.venue.name = event.venue.name;
      this.venue.city = event.venue.city;
      this.venue.region = event.venue.region;
      this.venue.country = event.venue.country;
      this.venue.longitude = event.venue.longitude;
      this.venue.latitude = event.venue.latitude;
      if(event.offers.length > 0){
        switch(event.offers[0].type.toLowerCase()){
          case 'presale': this.status = "PRESALE"; break;
          case 'tickets': this.status = "BUY NOW"; break;
          case 'sold out': this.status = "SOLD OUT"; break;
        }
      }
      else{
        this.status = "NOT AVAILABLE";
      }

      return true;
    }
    else{
      return false;
    }
  }
}
