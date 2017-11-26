import { Component, Input, OnInit } from '@angular/core';

import { Event } from '../../shared/event.model';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  @Input() events: Event[];
  private currentYear: number;
  private currentMonth: number;
  private currentDisplayMonth: string;
  public dates = [];
  private daysWithEvents = [];
  private datesEvents = [];
  private voidDays = [];
  private calendar = [];
  private currentDate: Date;
  constructor() { }

  ngOnInit() {
    this.initDate();
    this.currentYear = this.currentDate.getFullYear();
    this.currentMonth = this.currentDate.getMonth();
    this.currentDisplayMonth = this.translateMonth(this.currentMonth);

    this.calendar = this.getDaysByMonth();

    // Deep clone of the object
    this.datesEvents = JSON.parse(JSON.stringify(this.calendar));

    this.setEventsDays();
    this.initDate();
    this.dates = this.calendar[this.currentYear][this.currentMonth];
    this.daysWithEvents = this.datesEvents[this.currentYear][this.currentMonth];
    this.setVoidDays(this.currentDate.getDay());
  }

  private initDate() {
    this.currentDate = new Date();
    this.currentDate.setDate(1);
  }

  public setVoidDays(n: number) {
    this.voidDays = [];
    for(let i = 0; i < n; i++) {
      this.voidDays.push(" ");
    }
  }

  public navigateForward() {
    if(this.currentYear == 2018 && this.currentMonth == 11) {
      console.log('Max date reached');
    }
    else{
      this.setDate(1);
    }
  }

  public navigateBack() {
    let now = new Date();
    if(this.currentMonth > now.getMonth() || this.currentYear > now.getFullYear()) {
      this.setDate(-1);
    }
  }

  public eventInfo(n: number) {
    let dateEvent;
    let event;
    let message = "";

    for(let i = 0; i < this.events.length; i++) {
      dateEvent = new Date(this.events[i].date);
      console.log(dateEvent);
      if(dateEvent.getDate() == this.dates[n]
        && dateEvent.getMonth() == this.currentMonth
        && dateEvent.getFullYear() == this.currentYear) {
        event = this.events[i];
        break;
      }
    }

    if(event) {
      if(event.venue.name) {
        message += event.venue.name + "\n";
      }

      if(event.venue.city) {
        message += event.venue.city;
      }

      if(event.venue.region) {
        message += ", " + event.venue.region;
      }

      if(event.venue.country) {
        message += " " + event.venue.country;
      }
    }
    return message;
  }

  private setDate(n: number) {
    if(n > 0) {
      this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    }
    else {
      this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    }
    this.currentDate.setDate(1);
    this.setVoidDays(this.currentDate.getDay());
    this.currentYear = this.currentDate.getFullYear();
    this.currentMonth = this.currentDate.getMonth();
    this.currentDisplayMonth = this.translateMonth(this.currentMonth);
    this.dates = this.calendar[this.currentYear][this.currentMonth];
    this.daysWithEvents = this.datesEvents[this.currentYear][this.currentMonth];
  }

  private setEventsDays() {
    let dateEvent;

    for(let i = 0; i < this.events.length; i++) {
      dateEvent = new Date(this.events[i].date);
      this.datesEvents[dateEvent.getFullYear()][dateEvent.getMonth()][dateEvent.getDate()-1] = -1;
    }

  }

  private getDaysByMonth() {
    let date = this.currentDate;
    let year = date.getFullYear();
    let month;
    let dates = [];

    while(year <= 2018) {
      dates[year] = [];
      month = date.getMonth();
      while(month <= 11) {
        dates[year][month] = [];
        while(date.getMonth() === month){
          dates[year][month].push(date.getDate());
          date.setDate(date.getDate() + 1);
        }
        month++;
      }
      year++;
    }
    return dates;
  }

  private translateMonth(month: number) {
    let translated;

    switch(Number(month)) {
      case 0: translated = 'January'; break;
      case 1: translated = 'February'; break;
      case 2: translated = 'March'; break;
      case 3: translated = 'April'; break;
      case 4: translated = 'May'; break;
      case 5: translated = 'June'; break;
      case 6: translated = 'July'; break;
      case 7: translated = 'August'; break;
      case 8: translated = 'September'; break;
      case 9: translated = 'October'; break;
      case 10: translated = 'November'; break;
      case 11: translated = 'December'; break;
    }

    return translated;
  }

}
