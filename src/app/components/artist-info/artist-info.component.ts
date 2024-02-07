import { Component, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxStarsComponent } from 'ngx-stars';
import { Subscription } from 'rxjs';
import { Artist, ArtistType } from 'src/app/models/albums - artists.interface';
import { Albums } from 'src/app/models/search.interface';
import { SpotifyApiService } from 'src/app/services/SpotifyApi.service';

@Component({
  selector: 'app-artist-info',
  templateUrl: './artist-info.component.html',
  styleUrl: './artist-info.component.scss',
})
export class ArtistInfoComponent {
  @ViewChild(NgxStarsComponent)
  starsComponent?: NgxStarsComponent;
  
  artistId: string;
  artist_info_subscription: Subscription | null;
  artist_id_subscription: Subscription | null;
  artist_albums_subscription: Subscription | null;
  artist_info: Artist;
  artist_albums: Albums;
  ratingDisplay: number;
  loading: boolean;

  constructor(private auth: SpotifyApiService, private route: ActivatedRoute) {
    this.artistId = '';
    this.artist_id_subscription = null;
    this.artist_info_subscription = null;
    this.artist_albums_subscription = null;
    this.ratingDisplay = 0;
    this.loading = true;

    this.artist_info = {
      images: [],
      external_urls: { spotify: '' },
      href: '',
      id: '',
      name: '',
      type: ArtistType.Artist,
      uri: '',
      isFollowing: false,
      followers: { href: null, total: 0 },
    };

    this.artist_albums = {
      href: '',
      items: [],
      limit: 0,
      next: '',
      offset: 0,
      previous: null,
      total: 0,
    };
  }

  ngOnInit(): void {
    this.loading = true;
    this.getArtistId();
    this.fetchArtistInfo();
    this.fetchArtistAlbums();
  }

  calculateStarRating() {
    if ((this.artist_info.popularity == undefined) || (this.artist_info.popularity == null)) {
      this.starsComponent?.setRating(0);
    }
    else {
      this.ratingDisplay = this.artist_info.popularity / 20;
      this.starsComponent?.setRating(this.ratingDisplay);
    }
  }

  getArtistId() {
    this.artist_id_subscription = this.route.params.subscribe((params) => {
      this.artistId = params['id'];
    });
  }

  fetchArtistInfo() {
    this.artist_info_subscription = this.auth
      .getArtistInfo(this.artistId)
      .subscribe((resp) => {
        this.artist_info = resp;
        this.calculateStarRating();
      });
  }

  fetchArtistAlbums() {
    this.artist_albums_subscription = this.auth
      .getArtistAlbums(this.artistId, null)
      .subscribe((resp) => {
        this.artist_albums = resp;
        this.loading = false;
      });
  }

  ngOnDestroy() {
    this.artist_id_subscription?.unsubscribe();
    this.artist_info_subscription?.unsubscribe();
    this.artist_albums_subscription?.unsubscribe();
  }
}
