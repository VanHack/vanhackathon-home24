import { Component, Input ,OnInit } from '@angular/core';

import { Artist } from '../shared/artist.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  @Input() artist: Artist;

  constructor() { }

  ngOnInit() {
    console.log(this.artist);
  }

}
