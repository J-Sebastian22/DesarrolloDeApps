import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
    path: 'torneo',
    loadChildren: () => import('./torneo/torneo.module').then( m => m.TorneoPageModule)
  },
  {
    path: 'semi',
    loadChildren: () => import('./semi/semi.module').then( m => m.SemiPageModule)
  },
  {
    path: 'final',
    loadChildren: () => import('./final/final.module').then( m => m.FinalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
