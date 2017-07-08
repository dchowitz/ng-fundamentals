import { Injectable } from '@angular/core';
import eventList from './event-data';

@Injectable()
export default class EventService {
  getEvents() {
    return eventList;
  }
}