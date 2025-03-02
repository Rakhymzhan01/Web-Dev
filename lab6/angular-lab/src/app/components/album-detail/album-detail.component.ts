import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Album } from '../../models/album.model';
import { AlbumsService } from '../../services/albums.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  editedTitle: string = '';
  isLoading: boolean = true;
  isSaving: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const albumId = Number(params.get('id'));
      if (albumId) {
        this.loadAlbum(albumId);
      }
    });
  }

  loadAlbum(id: number): void {
    this.isLoading = true;
    this.albumsService.getAlbum(id)
      .subscribe(
        (data) => {
          this.album = data;
          this.editedTitle = data.title;
          this.isLoading = false;
        },
        (error) => {
          console.error('Error fetching album details:', error);
          this.isLoading = false;
        }
      );
  }

  saveAlbum(): void {
    if (!this.album) return;
    
    this.isSaving = true;
    const updatedAlbum: Album = {
      ...this.album,
      title: this.editedTitle
    };

    this.albumsService.updateAlbum(updatedAlbum)
      .subscribe(
        (data) => {
          this.album = data;
          this.isSaving = false;
          alert('Album updated successfully!');
        },
        (error) => {
          console.error('Error updating album:', error);
          this.isSaving = false;
          // JSONPlaceholder doesn't actually update the data, so we'll simulate a successful update:
          this.album.title = this.editedTitle;
          alert('Album updated successfully! (simulated)');
        }
      );
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}