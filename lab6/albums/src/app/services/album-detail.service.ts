import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AlbumELement } from '../model/album.interface';

@Injectable({
  providedIn: 'root'
})


export class AlbumDetailService {
  private http = inject(HttpClient);
  private apiUrl = 'https://jsonplaceholder.typicode.com/albums';

  getAlbum(id: number): Observable<AlbumELement> {
    return this.http.get<AlbumELement>(`${this.apiUrl}/${id}`);
  }


  updateAlbum(updatedAlbum: AlbumELement): Observable<AlbumELement> {
    return this.http.put<AlbumELement>(
      `${this.apiUrl}/${updatedAlbum.id}`,
      updatedAlbum
    );
  }
}
