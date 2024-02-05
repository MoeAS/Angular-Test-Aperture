import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './components/shared/side-bar/side-bar.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MainGuard } from './guards/main.guard';
import { LoginGuard } from './guards/login.guard';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CoreModule } from './components/home/core.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { StoreModule } from '@ngrx/store';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { SpotifyApiService } from './services/SpotifyApi.service';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    MatSnackBarModule,
    StoreModule.forRoot(),
    CoreModule
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    provideAnimationsAsync(),
    SpotifyApiService,
    LoginGuard,
    MainGuard,
  ]
})
export class AppModule { }
