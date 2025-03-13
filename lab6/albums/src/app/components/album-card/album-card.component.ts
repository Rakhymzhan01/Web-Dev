import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { AlbumELement } from '../../model/album.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-album-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './album-card.component.html',
  styleUrl: './album-card.component.scss',
})
export class AlbumCardComponent {
  @Input({ required: true }) album!: AlbumELement;
  @Output() delete = new EventEmitter<number>();
  @Output() openDetail = new EventEmitter<number>();

  onDelete = () => this.delete.emit(this.album.id);
  onOpenDetail = () => this.openDetail.emit(this.album.id);
}
