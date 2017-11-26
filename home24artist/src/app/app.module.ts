import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { ArtistService } from './artist.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { SearchComponent } from './search/search.component';
import { ContentComponent } from './content/content.component';
import { FilterComponent } from './content/filter/filter.component';
import { ArtistComponent } from './content/artist/artist.component';
import { EventsComponent } from './content/events/events.component';
import { EventComponent } from './content/events/event/event.component';
import { LoaderComponent } from './ui/loader/loader.component';
import { BodyDetailComponent } from './body-detail/body-detail.component';


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
    EventComponent,
    LoaderComponent,
    BodyDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBBkaYgtzMxtaYYIhEZgMALTK7AeCBeGK4'
    })
  ],
  providers: [ArtistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
