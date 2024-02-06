import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { NewReleases } from 'src/app/models/albums - artists.interface';
import { SpotifyApiService } from 'src/app/services/SpotifyApi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  albums!: NewReleases;
  loading: boolean;

  private albums_subscription: Subscription | null;

  constructor(private auth: SpotifyApiService) {
    this.albums_subscription = null;
    this.loading = false;
    this.albums = {
      albums: {
        href: '',
        items: [],
        limit: 0,
        next: null,
        offset: 0,
        previous: null,
        total: 0,
      }
    };

    this.searchAlbums();
  }

  searchAlbums() {
    this.loading = true;
    this.albums_subscription = this.auth
      .getNewReleases(null)
      .subscribe((resp) => {
        this.albums.albums = resp.albums;
        this.loading = false;
        console.log(this.albums);
      });
  }

  ngOnDestroy() {
    this.albums_subscription?.unsubscribe();
  }
}
