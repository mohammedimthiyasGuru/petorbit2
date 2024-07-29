import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule,HammerModule  } from '@angular/platform-browser';
import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { BlogviewComponent } from '../blogview/blogview.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HammerModule,
    TabsPageRoutingModule
  ],
  declarations: [TabsPage,BlogviewComponent]
})
export class TabsPageModule {}
