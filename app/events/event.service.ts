import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs/RX';
import eventList from './event-data';
import { Event } from './event.model';

@Injectable()
export class EventService {
  getEvents():Observable<Event[]> {
    const subject = new Subject<Event[]>();
    setTimeout(() => {
      subject.next(eventList);
      subject.complete();
     }, 100);
    return subject;
  }
  getEvent(id: number):Event {
    return eventList.find(e => e.id === id);
  }
}