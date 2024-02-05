import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { CallbackGuard } from 'src/app/guards/callback.guard';
import { SpotifyApiService } from '../../services/SpotifyApi.service';
import { HttpClientModule } from '@angular/common/http';
import { CallbackComponent } from './callback/callback.component';



@NgModule({
  declarations: [LoginComponent, CallbackComponent],
  imports: [
    LoginRoutingModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [SpotifyApiService, CallbackGuard],
  exports: [LoginComponent, CallbackComponent]
})
export class LoginModule { }
