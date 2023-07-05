import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Cast, PeliculaDetalle } from 'src/app/interfaces/interfaces';
import { MoviesService } from 'src/app/services/movies.service';
import { IonicSlides, ModalController } from '@ionic/angular';
import { DataLocalService } from 'src/app/services/data-local.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent  implements OnInit {

  @Input() id: any;
  pelicula: PeliculaDetalle = {};
  oculto=150;
  actores: Cast[] = [];
  slideOptsActores = {
    initialSlide: 1,
    speed: 400,
  };

  constructor(
    private movieService: MoviesService,
    private modalCtrl: ModalController,
    private dataLocal: DataLocalService
  ) { }

  ngOnInit() {
    this.movieService.getDetailMovie(this.id).subscribe(
      data => {
        this.pelicula=data;
      }
    )
    this.movieService.getActresslMovie(this.id).subscribe(
      data => {
        this.actores=data.cast
      }
    )
  }

  back() {
    this.modalCtrl.dismiss();
  }

  fav() {
    this.dataLocal.saveMovie(this.pelicula);
  }

}
