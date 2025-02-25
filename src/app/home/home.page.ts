import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { IndexComponent } from '../index/index.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false, 
})
export class HomePage implements OnInit {

  popularAnimes: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getPopularAnimes().subscribe(
      (data) => {
        console.log(data); 
        this.popularAnimes = data.data; 
      },
      (error) => {
        console.error('Error al obtener los animes:', error);
      }
    );
  }
}
