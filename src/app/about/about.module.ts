import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from './about.component';
import { FormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { MapComponent } from './map/map.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'about', component: AboutComponent }
    ])
    ,BrowserModule,
    FormsModule
    // ,AgmCoreModule.forRoot({apiKey: 'AIzaSyCtJSuEcCHpS4r5I-NikkuYhnuPr7E3bvs'}),
    // NgbModule.forRoot()
  ],
  providers: [
    GoogleMapsAPIWrapper // <---
  ],
  declarations: [
    AboutComponent,
    MapComponent]})
export class AboutModule { }
