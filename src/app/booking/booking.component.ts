import { Component, OnInit } from '@angular/core';
import {EventService} from '../event.service';
import {Response} from '@angular/http';
import {Event} from '../event.interface';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  display_form = true;
  display_message = false;
  events: Event[];

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventService.getCart().subscribe(
        (events: Event[]) => this.events = events,
        (error: Response) => console.log(error)
    );
  }
  sendMail(email, number) {
    this.eventService.sendMail(email, number).then(() => {
      console.log('mail sent');
      this.display_form = false;
      this.display_message = true;
      this.eventService.deleteCartEvent().then(() => {
      });
    });
    console.log(email, number);
  }

}
