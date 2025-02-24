import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false
})
export class AppComponent implements OnInit {

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getPopularAnimes().subscribe(response => {
      console.log('Animes populares:', response);
    });
  }
}
