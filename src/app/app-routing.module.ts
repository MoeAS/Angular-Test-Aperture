import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guards/login.guard';
import { MainGuard } from './guards/main.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Default route
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then((m) => m.LoginModule),
    canActivate: [LoginGuard],
  },
  {
    path: 'home',
    loadChildren: () => import('./components/home/home.module').then((m) => m.HomeModule),
    canActivate: [MainGuard],
  },
  {
    path: 'search',
    loadChildren: () => import('./components/search/search.module').then((m) => m.SearchModule),
    canActivate: [MainGuard],
  },
  {
    path: 'artist-info/:id',
    loadChildren: () => import('./components/artist-info/artist-info.module').then((m) => m.ArtistInfoModule),
    canActivate: [MainGuard],
  },
  // {
  //   path: 'not-found',
  //   loadChildren: () => import('./components/page-not-found/page-not-found.module').then((m) => m.PageNotFoundModule),
  // },
  { path: '**', redirectTo: '/not-found' }, // Wildcard route
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false, scrollPositionRestoration: 'enabled' },)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
