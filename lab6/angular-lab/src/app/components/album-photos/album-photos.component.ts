import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Photo } from '../../models/photo.model';
import { Album } from '../../models/album.model';
import { AlbumsService } from '../../services/albums.service';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  albumId: number = 0;
  album: Album | null = null;
  photos: Photo[] = [];
  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      if (id) {
        this.albumId = id;
        this.loadAlbumAndPhotos(id);
      }
    });
  }

  loadAlbumAndPhotos(id: number): void {
    this.isLoading = true;
    
    // Load album details
    this.albumsService.getAlbum(id).subscribe(
      (albumData) => {
        this.album = albumData;
        
        // Then load the photos
        this.albumsService.getAlbumPhotos(id).subscribe(
          (photosData) => {
            this.photos = photosData;
            this.isLoading = false;
          },
          (error) => {
            console.error('Error fetching photos:', error);
            this.isLoading = false;
          }
        );
      },
      (error) => {
        console.error('Error fetching album:', error);
        this.isLoading = false;
      }
    );
  }

  goBack(): void {
    this.router.navigate(['/albums', this.albumId]);
  }
}