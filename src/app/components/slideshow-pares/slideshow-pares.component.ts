import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Movies } from 'src/app/interfaces/interfaces';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss'],
})
export class SlideshowParesComponent  implements OnInit {

  @Input() peliculas: Movies[] = [];
  @Output() moreMovies = new EventEmitter();

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}

  moreData() {
   this.moreMovies.emit();
  }

  async lookDetails(idMovie: number) {
    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        id: idMovie
      }
    })
    modal.present();
  }

}
