import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
    <nav class='navbar navbar-expand-sm bg-dark navbar-dark'>
        <!--<img src="https://cdn.dribbble.com/users/707654/screenshots/2448417/swoosh.gif"/>-->
      <div class="navbar-header">
        <a class='navbar-brand'>
          <img src="https://seeklogo.com/images/N/nike-logo-97641CDCFC-seeklogo.com.png" alt="Logo" style="width:100px;">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class='nav navbar-nav navbar-right'>
          <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/welcome']">Home</a></li>
          <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/products']">Product List</a></li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
              More
            </a>
            <div class="dropdown-menu" aria-labelledby="dropdownMenu">
              <a class="dropdown-item" href="#">Link 1</a>
              <a class="dropdown-item" href="#">Link 2</a>
              <a class="dropdown-item" href="#">Link 3</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <div class='container'>
      <router-outlet></router-outlet>
    </div>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
