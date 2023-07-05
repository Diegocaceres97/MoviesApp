import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../components/detalle/detalle.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  textoBuscar='';
  peliculas:Pelicula[] = [];
  buscando = false;

  constructor(
    private movieService: MoviesService,
    private modalCtrl: ModalController
  ) {}

  search(event:any | string){
    this.buscando=true;
    const valor:string = event?.detail?.value?? event;

    if(valor.length === 0){
      this.buscando=false;
      this.peliculas=[];
      return;
    }

    this.movieService.getMovie(valor).subscribe(
      (data:any) => {
        this.peliculas = data['results'];
        this.buscando=false;
      }
    )
  }

  async showDetail(id:number){
    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        id
      }
    })
    modal.present();
  }

}
