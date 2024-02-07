import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Artists } from 'src/app/models/search.interface';
import { SpotifyApiService } from 'src/app/services/SpotifyApi.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  searchTerm = '';
  artists!: Artists;
  loading: boolean;

  private artist_subscription: Subscription | null;

  constructor(private auth: SpotifyApiService) {
    this.artist_subscription = null;
    this.loading = false;
    this.artists = {
      href: '',
      items: [],
      limit: 0,
      next: null,
      offset: 0,
      previous: null,
      total: 0,
    };
  }

  modelChange(str: string): void {
    this.searchTerm = str;
    this.loading = true;
    this.searchArtists();
  }

  searchArtists() {
    this.artist_subscription = this.auth
      .getArtistsSearched(null, this.searchTerm)
      .subscribe((resp) => {
        this.artists = resp.artists;
        this.loading = false;
      });
  }

  ngOnDestroy() {
    this.artist_subscription?.unsubscribe();
  }
}
