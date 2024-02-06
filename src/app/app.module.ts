import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoadingModule } from './components/loading/loading.module';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    StoreModule.forRoot(),
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    LoadingModule
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    provideAnimationsAsync(),
    SpotifyApiService,
    LoginGuard,
    MainGuard
  ]
})
export class AppModule { }
