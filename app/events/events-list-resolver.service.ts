import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService } from './event.service';
import { Event } from './event.model';

@Injectable()
export class EventsListResolverService implements Resolve<Event[]> {
  constructor(private eventService:EventService) {
  }

  resolve() {
    return this.eventService.getEvents().map(events => events);
  }
}