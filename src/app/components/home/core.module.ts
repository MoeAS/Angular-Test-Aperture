import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SideBarComponent } from '../shared/side-bar/side-bar.component';

import { HomeComponent } from './home.component';
import { SearchComponent } from '../search/search.component';
import { MainGuard } from 'src/app/guards/main.guard';
import { SpotifyApiService } from 'src/app/services/SpotifyApi.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
];
@NgModule({
  declarations: [],
  exports: [
    RouterModule
  ],
  providers: [SpotifyApiService, MainGuard],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class CoreModule {}
