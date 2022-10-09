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
    path: 'dispositivo/:id',
    loadChildren: () => import('./components/dispositivo/dispositivo.module').then( m => m.DispositivoPageModule)
  },
  {
    path: 'logRiegos/:id',
    loadChildren: () => import('./components/logs/logs.module').then( m => m.LogsPageModule)
  },
  {
    path: 'medicion/:id/todas',
    loadChildren: () => import('./components/mediciones/mediciones.module').then( m => m.MedicionesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
