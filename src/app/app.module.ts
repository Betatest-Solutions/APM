import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './product/product.module';
import { AboutModule} from "./about/about.module";
import { InfoService} from "./home/info.service";
import { MatToolbarModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatIconModule, MatButtonModule, MatCardModule, MatTableModule, MatDividerModule, MatSnackBarModule}
from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { FooterComponent } from './footer/footer.component';
import { MoreModule} from "./more/more.module";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    SlimLoadingBarModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    ProductModule,
    AboutModule,
    MoreModule
    ,ReactiveFormsModule
    ,BrowserAnimationsModule
    ,MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule
  ],
  providers: [InfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
