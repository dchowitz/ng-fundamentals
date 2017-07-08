import { Component, OnInit } from '@angular/core';
import EventService from './event.service';
import Toast from '../common/toastr.service';

@Component({
  selector: 'events-list',
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr/>
      <div class="row">
        <div *ngFor="let event of events" class="col-md-5">
          <event-thumbnail [event]="event" (click)="onEventClick(event.name)"></event-thumbnail>
        </div>
      </div>
    </div>
  `
})
export class EventsListComponent implements OnInit {
  events;

  constructor(private eventService: EventService, private toast: Toast) {
  }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  onEventClick(eventName) {
    //(<any>window).toastr.success(eventName);
    this.toast.success(eventName);
  }
}