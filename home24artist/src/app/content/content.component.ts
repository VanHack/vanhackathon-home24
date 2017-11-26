import { Component, Input } from '@angular/core';

import { Artist } from '../shared/artist.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  @Input() artist: Artist;

  constructor() { }

}
