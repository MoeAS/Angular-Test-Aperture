import { Component } from '@angular/core';
import { SpotifyApiService } from 'src/app/services/SpotifyApi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private auth: SpotifyApiService) {}

  Login() {
    this.auth.OpenSpotifyWindow();
  }
}
