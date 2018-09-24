import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from "@angular/forms";
import {Link1Component} from "./link1/link1.component";
import { Info} from "../home/info.model";
import { InfoService } from '../home/info.service';
import { MatToolbarModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatIconModule, MatButtonModule, MatCardModule, MatTableModule, MatDividerModule, MatSnackBarModule}
  from '@angular/material';
// import { * } from '@angular/material';
import { MatTableDataSource } from '@angular/material';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'Link1', component: Link1Component }
    ])
    ,BrowserModule,
    FormsModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [ InfoService
  ],
  declarations: [
    Link1Component]})
export class MoreModule { }
