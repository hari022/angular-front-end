import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'angular4-carousel';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutComponent } from './about/about.component';
import { PricingComponent } from './pricing/pricing.component';
import { TeamComponent } from './team/team.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutComponent,
    PricingComponent,
    TeamComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    Ng2PageScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
