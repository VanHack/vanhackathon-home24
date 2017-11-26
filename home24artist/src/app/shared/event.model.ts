class Venue {
  public name: string;
  public city: string;
  public region: string;
  public country: string;
  public longitude: number;
  public latitude: number;
  public photoUrl: string = null;
}

export class Event {
  date: string;
  venue: Venue;
  status: string;
  statusColor: string = '#f55b3e';
  public setEvent(event: any){
    if(event) {
      let date = new Date(event.datetime);
      this.date = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
      this.venue = new Venue();
      this.venue.name = event.venue.name;
      this.venue.city = event.venue.city;
      this.venue.region = event.venue.region;
      this.venue.country = event.venue.country;
      this.venue.longitude = Number(event.venue.longitude);
      this.venue.latitude = Number(event.venue.latitude);
      if(event.offers.length > 0){
        switch(event.offers[0].type.toLowerCase()){
          case 'tickets': this.status = "BUY NOW"; break;
          case 'presale': this.status = "PRESALE"; this.statusColor = "gold"; break;
          case 'sold out': this.status = "SOLD OUT"; this.statusColor = "dimgray"; break;
        }
      }
      else{
        this.status = "NOT AVAILABLE";
        this.statusColor = "dimgray";
      }

      return true;
    }
    else{
      return false;
    }
  }
}
