import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { AlbumDetailComponent } from './components/album-detail/album-detail.component';
import { AlbumPhotosComponent } from './components/album-photos/album-photos.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home Page',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About Page',
  },
  {
    path: 'albums',
    component: AlbumsComponent,
    title: 'Albums Page',
  },
  {
    path: 'albums/:id',
    component: AlbumDetailComponent,
    title: 'Details of Album',
  },
  {
    path: 'albums/:id/photos',
    component: AlbumPhotosComponent,
    title: 'Photos of Album',
  },
];
