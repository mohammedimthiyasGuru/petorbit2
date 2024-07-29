import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ImagesliderComponent } from './imageslider/imageslider.component';
import { SelectstateComponent } from './selectstate/selectstate.component';
import { VersioncheckComponent } from './versioncheck/versioncheck.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path : '',
    component : VersioncheckComponent
  },
  {
    path : 'Slider',
    component : ImagesliderComponent
  },
   {
    path : 'state',
    component : SelectstateComponent
  },

  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
