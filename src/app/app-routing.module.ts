import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component'; // Asegúrate de que la ruta sea correcta

const routes: Routes = [
  {
    path: '',
    component: IndexComponent  // <-- Carga   el componente Index primero
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'detailanimes',
    loadChildren: () => import('./pages/detailanimes/detailanimes.module').then(m => m.DetailanimesPageModule)
  },
  {
    path: 'detail/:id',
    loadComponent: () => import('./pages/detailanimes/detailanimes.page').then(m => m.DetailanimesPage)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
