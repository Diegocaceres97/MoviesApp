import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  textoBuscar='';

  constructor(
    private movieService: MoviesService
  ) {}

  search(event:any){
    const valor = event.detail.value;
    this.movieService.getMovie(valor).subscribe(
      data => {
        console.log(data)
      }
    )
  }

}
