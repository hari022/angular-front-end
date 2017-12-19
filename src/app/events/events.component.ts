import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Event} from '../event.interface';
import {EventService} from '../event.service';
import {Response} from '@angular/http';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private eventService: EventService, private router: Router) { }
  plan: string;
  events: Event[];

  ngOnInit() {
    this.route.params.subscribe( params =>
        this.plan = params['plan']
  );
    this.eventService.getEvents(this.plan).subscribe(
        (events: Event[]) => this.events = events,
        (error: Response) => console.log(error)
    );
  }
  addToCart(id) {
      this.eventService.addToCart(id)
          .then( () => this.router.navigate(['/booking']) );
  }
  // redirectToCart() {
  //     this.router.navigate(['/booking']);
  // }

}
