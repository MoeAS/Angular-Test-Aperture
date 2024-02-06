import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { SearchComponent } from '../search/search.component';
import { MainGuard } from 'src/app/guards/main.guard';
import { SpotifyApiService } from 'src/app/services/SpotifyApi.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArtistInfoComponent } from '../artist-info/artist-info.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'artist-info/:id', component: ArtistInfoComponent },
];
@NgModule({
  declarations: [],
  exports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SpotifyApiService, MainGuard],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class CoreModule {}
