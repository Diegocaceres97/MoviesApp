import { Component, Input, OnInit } from '@angular/core';
import { PeliculaDetalle } from 'src/app/interfaces/interfaces';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent  implements OnInit {

  @Input() id: any;
  pelicula: PeliculaDetalle = {};

  constructor(
    private movieService: MoviesService
  ) { }

  ngOnInit() {
    this.movieService.getDetailMovie(this.id).subscribe(
      data => {
        this.pelicula=data;
      }
    )
    this.movieService.getActresslMovie(this.id).subscribe(
      data => {
        console.log(data)
      }
    )
  }

}
