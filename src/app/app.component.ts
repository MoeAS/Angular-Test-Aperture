import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-test-aperture';

  isLogIn = true;

  route: string = '';

  constructor(
    location: Location,
    router: Router
  ) {
    router.events.subscribe((val) => {
      this.updateSections(location);
    });
  }

  updateSections(location: Location) {
    if (location.path() != '/home') {
      this.route = location.path();
      this.isLogIn = false;

      switch (this.route) {
        case '/login':
          this.isLogIn = true;
          break;

        case '/login/callback':
          this.isLogIn = true;
          break;

        default:
          this.isLogIn = false;
      }
    } else {
      this.route = '!login';
      this.isLogIn = false;
    }
  }
}
