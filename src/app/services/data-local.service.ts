import { Injectable, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { PeliculaDetalle } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService{

  peliculas: PeliculaDetalle[] = [];

  constructor(
    private storage: Storage
  ) { }

  saveMovie(pelicula: PeliculaDetalle){
    this.peliculas.push(pelicula);
    this.storage.set('movie', pelicula);
  }
}
