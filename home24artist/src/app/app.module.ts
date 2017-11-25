import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { SearchComponent } from './search/search.component';
import { ContentComponent } from './content/content.component';
import { FilterComponent } from './content/filter/filter.component';
import { ArtistComponent } from './content/artist/artist.component';
import { EventsComponent } from './content/events/events.component';
import { EventComponent } from './content/events/event/event.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    SearchComponent,
    ContentComponent,
    FilterComponent,
    ArtistComponent,
    EventsComponent,
    EventComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
