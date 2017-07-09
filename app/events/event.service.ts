import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/RX';
import eventList from './event-data';

@Injectable()
export class EventService {
  getEvents() {
    const subject = new Subject();
    setTimeout(() => {
      subject.next(eventList);
      subject.complete();
     }, 100);
    return subject;
  }
  getEvent(id: number) {
    return eventList.find(e => e.id === id);
  }
}