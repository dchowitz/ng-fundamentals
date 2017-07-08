import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/nav-bar.component';
import EventService from './events/event.service';
import Toast from './common/toastr.service';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
  ],
  providers: [
    EventService,
    Toast
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule{

}