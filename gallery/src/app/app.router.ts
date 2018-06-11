import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { AppComponent} from './app.component';
import { GalleryComponent} from './gallery/gallery.component';
import { Gallery2Component} from './gallery2/gallery2.component';
import { LightboxComponent } from './lightbox/lightbox.component';

export const router: Routes = [
    {path:'gallery', component: GalleryComponent},
    {path:'gallery2', component: Gallery2Component},
    {path:'lightbox', component: LightboxComponent}    
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);