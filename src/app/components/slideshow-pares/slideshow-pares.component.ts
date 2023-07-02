import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movies } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-slideshow-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss'],
})
export class SlideshowParesComponent  implements OnInit {

  @Input() peliculas: Movies[] = [];
  @Output() moreMovies = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  moreData() {
   this.moreMovies.emit();
  }

}
