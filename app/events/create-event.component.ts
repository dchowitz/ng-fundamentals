import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  template: `
    <div>
      <h1>New Event</h1>
      <hr/>
      <div class="col-md-6">
        <h3>Create Event Form Comes Here</h3>
        <br/>
        <br/>
        <button type="submit" class="btn btn-primary">Save</button>
        <button type="button" class="btn" (click)="cancel()">Cancel</button>
      </div>
    </div>
  `
})
export class CreateEventComponent {
  isDirty = true

  constructor(private router: Router) {
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}