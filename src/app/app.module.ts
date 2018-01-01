import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'angular4-carousel';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutComponent } from './about/about.component';
import { PricingComponent } from './pricing/pricing.component';
import { TeamComponent } from './team/team.component';
import { FooterComponent } from './footer/footer.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import {EventService} from './event.service';
import { HttpModule, Http } from '@angular/http';
import { BookingComponent } from './booking/booking.component';
import { AddonComponent } from './addon/addon.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'events/:plan', component: EventsComponent},
  { path: 'addon/:id', component: AddonComponent},
  { path: 'booking/:plan', component: BookingComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutComponent,
    PricingComponent,
    TeamComponent,
    FooterComponent,
    EventsComponent,
    HomeComponent,
    BookingComponent,
    AddonComponent

  ],
  imports: [
      RouterModule.forRoot(appRoutes),
    BrowserModule,
    CarouselModule,
    Ng2PageScrollModule,
    HttpModule,
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
