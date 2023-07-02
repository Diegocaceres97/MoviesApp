import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { PipesModule } from "../pipes/pipes.module";
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';
import { SlideshowParesComponent } from './slideshow-pares/slideshow-pares.component';
import { DetalleComponent } from './detalle/detalle.component';



@NgModule({
    declarations: [
        SlideshowBackdropComponent,
        SlideshowPosterComponent,
        SlideshowParesComponent,
        DetalleComponent
    ],
    exports: [
        SlideshowBackdropComponent,
        SlideshowPosterComponent,
        SlideshowParesComponent,
        DetalleComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    imports: [
        CommonModule,
        IonicModule,
        PipesModule
    ]
})
export class ComponentsModule { }
