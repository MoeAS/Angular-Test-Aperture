import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthToken } from '../models/authtoken.interface';
import { Observable } from 'rxjs';
import { Artist, NewReleases } from '../models/albums - artists.interface';
import { Albums, SearchArtist } from '../models/search.interface';
import { AlbumDetail } from '../models/albums.interface';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class SpotifyApiService {
  currentUrl = environment.url;

  public credentials = {
    clientId: environment.client_id,
    clientSecret: environment.client_secret,
    accessToken: '',
  };

  credential = btoa(
    `${this.credentials.clientId}:${this.credentials.clientSecret}`
  );

  public configURL = {
    authorize:
      'https://accounts.spotify.com/en/authorize?client_id=' +
      this.credentials.clientId +
      '&response_type=code' +
      '&scope=user-read-recently-played,user-top-read,user-read-playback-position,user-read-playback-state,user-follow-read,user-follow-modify,user-modify-playback-state, user-read-currently-playing,streaming,playlist-modify-public,playlist-modify-private,playlist-read-private,playlist-read-collaborative,user-library-modify,user-library-read,user-read-email,user-read-private' +
      '&redirect_uri=' +
      encodeURIComponent(`${this.currentUrl}/login/callback`) +
      '&expires_in=3600',
  };

  constructor(private http: HttpClient) {}

  public getQuery(query: string) {
    const url: string = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.credentials.accessToken,
    });

    return this.http.get(url, { headers });
  }

  OpenSpotifyWindow() {
    window.location.href = this.configURL.authorize;
  }

  SaveToken(token: AuthToken) {
    const date = new Date();
    const expirationDate = date.setSeconds(
      date.getSeconds() + token.expires_in
    );
    token.expirationDate = expirationDate;
    const tokenBefore = JSON.parse(localStorage.getItem('tokenInfo') || '{}');
    if (tokenBefore.refresh_token) {
      token.refresh_token = tokenBefore.refresh_token;
    }
    localStorage.setItem('tokenInfo', JSON.stringify(token));
  }

  RefreshToken() {
    const token = JSON.parse(localStorage.getItem('tokenInfo') || '{}');
    const body = new URLSearchParams();
    body.set('grant_type', 'refresh_token');
    body.set('refresh_token', token.refresh_token);
    return this.http.post<AuthToken>(
      'https://accounts.spotify.com/api/token',
      body,
      {
        headers: new HttpHeaders({
          Authorization: `Basic ${this.credential}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        }),
      }
    );
  }

  GetTokenFromCode(accessCode: string) {
    const body = new URLSearchParams();
    body.set('code', accessCode);
    body.set('redirect_uri', `${this.currentUrl}/login/callback`);
    body.set('grant_type', 'authorization_code');
    return this.http.post<AuthToken>(
      'https://accounts.spotify.com/api/token',
      body,
      {
        headers: new HttpHeaders({
          Authorization: `Basic ${this.credential}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        }),
      }
    );
  }

  VerifyToken(accessToken: string) {
    return this.http.get('https://api.spotify.com/v1/me', {
      headers: new HttpHeaders({
        skip: 'true',
        Authorization: `Bearer ${accessToken}`,
      }),
    });
  }

  getArtistInfo(id: string): Observable<Artist> {
    return this.http.get<Artist>('https://api.spotify.com/v1/artists/' + id);
  }

  getArtistsSearched(
    url: string | null,
    termSearched: string | null
  ): Observable<SearchArtist> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = { headers: headers };
    if (!url) {
      return this.http.get<SearchArtist>(
        `https://api.spotify.com/v1/search?q=%22${termSearched}%22&type=artist&limit=8`,
        options
      );
    }
    return this.http.get<SearchArtist>(url, options);
  }

  getArtistAlbums(id: string | null, url: string | null): Observable<Albums> {
    if (!url) {
      return this.http.get<Albums>(
        // `https://api.spotify.com/v1/artists/${id}/albums?limit=9`
        `https://api.spotify.com/v1/artists/${id}/albums` // remove limiter
      );
    } else {
      return this.http.get<Albums>(url);
    }
  }

  getNewReleases(url: string | null): Observable<NewReleases> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = { headers: headers };

    if (!url) {
      return this.http.get<NewReleases>(
        // `https://api.spotify.com/v1/browse/new-releases?country=AR&offset=0&limit=12`,
        `https://api.spotify.com/v1/browse/new-releases?country=AR&offset=0`,  // remove limiter
        options
      );
    }
    return this.http.get<NewReleases>(url, options);
  }

  LogOut() {
    localStorage.removeItem('tokenInfo');
  }
}
