import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from './event.service';
import { Event } from './event.model';

@Component({
  templateUrl: 'app/events/event-details.component.html',
  styles: [`
    .container {
      padding-left: 20px;
      padding-right: 20px;
    }
    .event-image {
      height: 100px;
    }
  `]
})
export class EventDetailsComponent implements OnInit {
  event:Event;

  constructor(private eventService: EventService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const eventId = this.route.snapshot.params['id'];
    this.event = this.eventService.getEvent(+eventId); // WTF - explicit cast to number
  }
}