import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core.module';
import { SongCardsComponent } from '../song-cards/song-cards.component';
import { LoadingModule } from '../loading/loading.module';

@NgModule({
  declarations: [HomeComponent, SongCardsComponent],
  imports: [
    HomeRoutingModule,
    CommonModule,
    HttpClientModule,
    CoreModule,
    LoadingModule
  ],

  exports: [HomeComponent, SongCardsComponent]
})
export class HomeModule { }
