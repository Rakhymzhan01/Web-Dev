import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { PhotoElement } from '../model/photo.interface';

@Injectable({
  providedIn: 'root'
})

export class AlbumPhotosService {
  private http = inject(HttpClient);
  private apiUrl = 'https://jsonplaceholder.typicode.com/albums';

  getPhotos(albumId: number): Observable<PhotoElement[]> {
    return this.http.get<PhotoElement[]>(`${this.apiUrl}/${albumId}/photos`);
  }
}
