import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { AppComponent} from './app.component';
import { GalleryComponent} from './gallery/gallery.component';

export const router: Routes = [
    {path:'',redirectTo:'gallery', pathMatch:'full'},
    {path:'gallery', component: GalleryComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);