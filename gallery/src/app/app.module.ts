import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.router';
import { NgxGalleryModule } from 'ngx-gallery';

import 'hammerjs'; // <------ mandatory dependency for angular-modal-gallery
import 'mousetrap'; // <------ mandatory dependency for angular-modal-gallery
import { ModalGalleryModule } from 'angular-modal-gallery';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { Gallery2Component } from './gallery2/gallery2.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    Gallery2Component
  ],
  imports: [
    BrowserModule,
    routes,
    NgxGalleryModule,
    ModalGalleryModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
