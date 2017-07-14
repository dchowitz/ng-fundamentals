import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventService } from './event.service';

@Component({
  templateUrl: 'app/events/create-event.component.html',
  styles: [`
    em { float: right; color: #e05c65; padding-left: 10px; }
    .error input { background-color: #e3c3e5; }
    .error ::-webkit-input-placeholder { color: #999; }
  `]
})
export class CreateEventComponent {
  isDirty = true;

  constructor(private router: Router, private eventService: EventService) {
  }

  saveEvent(formValues) {
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(['/events']);
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}