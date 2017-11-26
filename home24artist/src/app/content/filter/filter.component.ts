import { Component, Output, EventEmitter } from '@angular/core';

import { ArtistService } from '../../artist.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  @Output() onCalendarSelectChange = new EventEmitter<boolean>();
  isSelected: boolean = false;

  constructor(private artistService: ArtistService) { }

  public onChange(value: string) {
    this.artistService.onChangeEventsOrder(value);
  }

  public onCalendarSelected() {    
    this.isSelected = !this.isSelected;
    this.onCalendarSelectChange.emit(this.isSelected);
  }

}
