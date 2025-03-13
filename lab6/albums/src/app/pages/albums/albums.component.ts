import { Component, effect, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AlbumCardComponent } from '../../components/album-card/album-card.component';
import { AlbumELement } from '../../model/album.interface';
import { AlbumService } from '../../services/albums.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [AlbumCardComponent],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.scss',
})
export class AlbumsComponent {
  private albumService = inject(AlbumService);
  private router = inject(Router);

  albums = signal<AlbumELement[]>([]);

  constructor() {
    this.fetchAlbums();
  }

  fetchAlbums(): void {
    this.albumService.getAlbums().subscribe((data) => this.albums.set(data));
  }

  deleteAlbum(id: number): void {
    this.albums.set(this.albums().filter((album) => album.id !== id));
  }

  openAlbumDetail(id: number): void {
    this.router.navigate(['/albums', id]);
  }
}
