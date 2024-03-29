import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { AuthToken } from '../models/authtoken.interface';
import { SpotifyApiService } from '../services/SpotifyApi.service';

@Injectable()
export class CallbackGuard implements CanActivate {
  constructor(
    private router: Router,
    private auth: SpotifyApiService,
    private _snackBar: MatSnackBar,
  ) {}
  canActivate(childRoute: ActivatedRouteSnapshot): Observable<boolean> {
    const param = childRoute.queryParamMap.get('code');
    if (param) {
      return this.auth.GetTokenFromCode(param).pipe(
        map((token: AuthToken) => {
          this.auth.SaveToken(token);
          this.router.navigateByUrl('home');
          return true;
        }),
        catchError(() => {
          this.router.navigateByUrl('login');
          this.auth.LogOut();
          const config = new MatSnackBarConfig();
          config.panelClass = ['success-dialog'];
          config.verticalPosition = 'bottom';
          config.horizontalPosition = 'center';
          this._snackBar.open(
            'Error: The acces code provided was wrong',
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
