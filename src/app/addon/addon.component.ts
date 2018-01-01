import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Event} from '../event.interface';
import {EventService} from '../event.service';

@Component({
  selector: 'app-addon',
  templateUrl: './addon.component.html',
  styleUrls: ['./addon.component.css']
})
export class AddonComponent implements OnInit {

  constructor(private route: ActivatedRoute, private eventService: EventService, private router: Router) { }
  id = this.eventService.id;
  ngOnInit() {
    // this.route.params.subscribe( params =>
    //     this.id = params['id']
    // )
  }

}
