import { Component, inject, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AlbumELement } from '../../model/album.interface';
import { CommonModule } from '@angular/common';
import { AlbumDetailService } from '../../services/album-detail.service';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.scss',
})
export class AlbumDetailComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private albumService = inject(AlbumDetailService);

  album: WritableSignal<AlbumELement | null> = signal(null);
  editedTitle = signal('');

  constructor() {
    const albumId = Number(this.route.snapshot.params['id']);
    this.fetchAlbum(albumId);
  }

  fetchAlbum(id: number) {
    this.albumService.getAlbum(id).subscribe((album) => {
      this.album.set(album);
      this.editedTitle.set(album.title);
    });
  }

  saveChanges() {
    if (!this.album()) return;

    const updatedAlbum: AlbumELement = {
      id: this.album()!.id,
      userId: this.album()!.userId,
      title: this.editedTitle(),
    };

    this.albumService.updateAlbum(updatedAlbum).subscribe({
      next: (response) => {
        this.album.set(response);
        console.log('Album updated:', response);
      },
      error: (err) => console.error('Error updating album:', err),
    });
  }

  onTitleChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.editedTitle.set(input.value);
  }

  goBack() {
    this.router.navigate(['/albums']);
  }
}
