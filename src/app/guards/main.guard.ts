import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { CanActivate, Router } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { AuthToken } from '../models/authtoken.interface';
import { SpotifyApiService } from '../services/SpotifyApi.service';

@Injectable()
export class MainGuard implements CanActivate {
  constructor(
    private auth: SpotifyApiService,
    private router: Router,
    private _snackBar: MatSnackBar,
  ) {}
  canActivate(): Observable<boolean> {
    const tokenInfo = localStorage.getItem('tokenInfo');
    if (tokenInfo) {
      const tokenAuth = JSON.parse(tokenInfo) as AuthToken;
      return this.auth.VerifyToken(tokenAuth.access_token).pipe(
        map(() => {
          return true;
        }),
        catchError((error: HttpErrorResponse) => {
          if (error.status == 401) {
            return of(true);
          }
          this.router.navigateByUrl('login');
          this.auth.LogOut();
          const config = new MatSnackBarConfig();
          config.panelClass = ['success-dialog'];
          config.verticalPosition = 'bottom';
          config.horizontalPosition = 'center';
          this._snackBar.open(
            'Error: You are not registered as a developer ',
            'Ok',
            config
          );
          return of(false);
        })
      );
    } else {
      this.router.navigateByUrl('login');
      return of(false);
    }
  }
}
