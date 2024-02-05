import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MainGuard } from 'src/app/guards/main.guard';
import { HttpClientModule } from '@angular/common/http';
import { SpotifyApiService } from 'src/app/services/SpotifyApi.service';
import { CoreModule } from './core.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    HomeRoutingModule,
    CommonModule,
    HttpClientModule,
    CoreModule
  ],

  exports: [HomeComponent]
})
export class HomeModule { }
