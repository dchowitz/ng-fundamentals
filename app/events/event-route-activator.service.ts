import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { EventService } from './event.service';

@Injectable()
export class EventRouteActivatorService implements CanActivate {
  constructor(private eventService: EventService, private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot):boolean {
    const eventId = +route.params['id'];
    const eventExists = !!this.eventService.getEvent(eventId);

    if (!eventExists) {
      this.router.navigate(['/404'])
    }

    return eventExists;
  }
}