import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { BloghomeComponent } from '../bloghome/bloghome.component';
import { NotificaitonlistComponent } from '../notificaitonlist/notificaitonlist.component';
import { BlogviewComponent } from '../blogview/blogview.component';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'blog',
        component : BloghomeComponent
      },
      {
        path: 'blog/view',
        component : BlogviewComponent
      },
      {
        path: 'notification',
        component : NotificaitonlistComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/blog',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
