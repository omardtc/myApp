import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DiscoComponent} from './disco/disco.component';
import { MerchComponent} from './merch/merch.component';
import { PhotosComponent} from './photos/photos.component';
import { SongsComponent} from './songs/songs.component';
import { TourComponent} from './tour/tour.component';



const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'about',
    component: AboutComponent,
    },
    {
      path: 'disco',
      component: DiscoComponent,
      },
      {
        path: 'merch',
        component: MerchComponent,
        },
        {
          path: 'photos',
          component: PhotosComponent,
          },
          {
            path: 'songs',
            component: SongsComponent,
            },
            {
              path: 'tour',
              component: TourComponent,
              },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
