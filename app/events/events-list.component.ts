import { Component } from '@angular/core';

@Component({
  selector: 'events-list',
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr/>
      <event-thumbnail
        #thumbnail
        [event]="events[0]">
      </event-thumbnail>
    </div>
  `
})
export class EventsListComponent {
  events = [
    {
      id: 1,
      name: 'Angular Connect',
      date: '09/26/2036',
      time: '10:00 am',
      price: 599.99,
      imageUrl: '/app/assets/images/angularconnect-shield.png',
      location: {
        address: '1057 DT',
        city: 'London',
        country: 'England'
      }
    }
  ];
}