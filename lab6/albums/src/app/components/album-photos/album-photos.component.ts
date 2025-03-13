import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlbumPhotosService } from '../../services/album-photos.service';
import { PhotoElement } from '../../model/photo.interface';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.scss',
})
export class AlbumPhotosComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private albumPhotosService = inject(AlbumPhotosService);

  albumId = Number(this.route.snapshot.paramMap.get('id'));
  photos = signal<PhotoElement[]>([]);

  constructor() {
    this.fetchPhotos();
  }

  fetchPhotos() {
    this.albumPhotosService.getPhotos(this.albumId).subscribe((data) => {
      this.photos.set(data);
    });
  }

  goBack() {
    this.router.navigate(['/albums', this.albumId]);
  }
}
