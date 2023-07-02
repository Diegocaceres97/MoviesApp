import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { AnswerMDB, Movies } from '../interfaces/interfaces';
import { register } from 'swiper/element/bundle';

register();
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  lastMovies: Movies[] = [];
  popular: Movies[] = [];

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.movieService.getFeature().subscribe((movie) => {
      this.lastMovies = movie.results;
    });

    this.movieService.getPopulirity().subscribe((resp) => {
      console.log('populares ', resp);
      this.popular = resp.results;
    });
  }
}
