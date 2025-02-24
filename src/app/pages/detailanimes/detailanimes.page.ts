import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Importa ActivatedRoute
import { ApiService } from 'src/app/services/api.service'; // Importa el ApiService
import { SafeUrlPipe } from '../../pipes/safe-url.pipe'; // Importa el pipe

@Component({
  selector: 'app-detailanimes',
  templateUrl: './detailanimes.page.html',
  styleUrls: ['./detailanimes.page.scss'],
  standalone:false,
  
})
export class DetailanimesPage implements OnInit {

  videos: any[] = [];  
  animeId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    
    this.animeId = +(this.route.snapshot.paramMap.get('id') ?? 0);
    
    
    this.apiService.getAnimeVideos(this.animeId).subscribe(
      (data) => {
        console.log(data); 
        this.videos = data.data; 
      },
      (error) => {
        console.error('Error al obtener los videos:', error);
      }
    );
  }
}
