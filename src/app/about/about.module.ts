import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from './about.component';
import { FormsModule} from "@angular/forms";
import { MapComponent } from './map/map.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'about', component: AboutComponent }
    ])
    ,BrowserModule,
    FormsModule
  ],
  providers: [
  ],
  declarations: [
    AboutComponent,
    MapComponent]})
export class AboutModule { }
