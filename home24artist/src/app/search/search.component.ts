import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  search = "";
  @Output() onSearch = new EventEmitter<string>();

  constructor() {}

  onSubmit() {
    this.onSearch.emit(this.search);
  }

}
