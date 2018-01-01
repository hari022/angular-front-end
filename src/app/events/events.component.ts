import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Event} from '../event.interface';
import {EventService} from '../event.service';
import {Response} from '@angular/http';
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private eventService: EventService, private router: Router) { }
  plan: string;
  events: Event[];
  eventsFilteredWithDate: Event[];
  selectedDate = null;
  displayAll = true;
  displayFiltered = false;
  dataAvailable = false;

  ngOnInit() {
    this.route.params.subscribe( params =>
        this.plan = params['plan']
  );
    this.eventService.getEvents(this.plan).subscribe(
        (events: Event[]) => this.events = events,
        (error: Response) => console.log(error)
    );
  }
  addId(id) {
    this.eventService.id = id;
    this.router.navigateByUrl('/addon/5');
  }
  convertDates(e) {
    this.selectedDate = e.target.value;
    this.displayAll = false;
    this.displayFiltered = true;
    const filteredEvents: Event[] = [];
    for (let event of this.events){
      if (Date.parse(this.selectedDate) === Date.parse(event.event_date)){
        filteredEvents.push(event);
        this.dataAvailable = true;
      }
    }
    this.eventsFilteredWithDate = filteredEvents;
    console.log(this.eventsFilteredWithDate);
  }
  addToCart(id) {
      this.eventService.addToCart(id)
          .then( () => this.router.navigate(['/addon/5']) );
  }
  // redirectToCart() {
  //     this.router.navigate(['/booking']);
  // }

}
