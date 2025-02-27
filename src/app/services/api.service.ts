import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = environment.apiUrl; 

  constructor(private http: HttpClient) {}

  getPopularAnimes(): Observable<any> {
    return this.http.get(`${this.apiUrl}/top/anime`);
  }

  getAnimeById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/anime/${id}`);
  }

  getAnimeVideos(id: number) {
    return this.http.get<any>(`https://api.jikan.moe/v4/anime/${id}/videos`);
  }
}