import { Component, OnInit } from '@angular/core';
import { Album } from '../../models/album.model';
import { AlbumsService } from '../../services/albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];

  constructor(private albumsService: AlbumsService) { }

  ngOnInit(): void {
    this.loadAlbums();
  }

  loadAlbums(): void {
    this.albumsService.getAlbums()
      .subscribe(
        (data) => {
          this.albums = data;
        },
        (error) => {
          console.error('Error fetching albums:', error);
        }
      );
  }

  deleteAlbum(id: number): void {
    if (confirm('Are you sure you want to delete this album?')) {
      this.albumsService.deleteAlbum(id)
        .subscribe(
          () => {
            // Filter out the deleted album from the list
            this.albums = this.albums.filter(album => album.id !== id);
            alert('Album deleted successfully!');
          },
          (error) => {
            console.error('Error deleting album:', error);
          }
        );
    }
  }
}