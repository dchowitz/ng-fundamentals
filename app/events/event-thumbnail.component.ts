import { Component, Input } from '@angular/core';
import { Event as IEvent } from './event.model';

@Component({
  selector: 'event-thumbnail',
  template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
      <h2>{{event.name}}</h2>
      <div>Date: {{event.date}}</div>
      <div [ngSwitch]="timeType()" [ngClass]="timeType()">
        Time: {{event.time}}
        <span *ngSwitchCase="'early'">(Early Start)</span>
        <span *ngSwitchCase="'late'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
      </div>
      <div>Price: \${{event.price}}</div>
      <div *ngIf="event.location">
        <span>Location: {{event.location.address}}</span>
        <span class="pad-left">{{event.location.city}}, {{event.location.country}}</span>
      </div>
      <div *ngIf="event.onlineUrl">
        <span>Web: {{event.onlineUrl}}</span>
      </div>
    </div>
  `,
  styles: [`
    .early {
      color: lightgreen !important;
    }
    .late {
      color: orange !important;
    }
    .thumbnail {
      min-height: 210px;
    }
    .pad-left {
      margin-left: 10px;
    }
    .well div {
      color: #bbb;
    }
  `]
})
export class EventThumbnailComponent {
  @Input() event:IEvent;

  private timeType() {
    switch (this.event.time) {
      case '8:00 am': return 'early';
      case '10:00 am': return 'late';
      default: return 'normal';
    }
  }
}