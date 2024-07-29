import { NgModule } from '@angular/core';
import { BrowserModule,HammerModule  } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidemenuComponent } from './pages/sidemenu/sidemenu.component';
import { ImagesliderComponent } from './imageslider/imageslider.component';
import { IonicStorageModule } from '@ionic/storage-angular';
import { SelectstateComponent } from './selectstate/selectstate.component';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule
import { FormsModule } from '@angular/forms';
import { VersioncheckComponent } from './versioncheck/versioncheck.component';
import { BloghomeComponent } from './bloghome/bloghome.component';
import { NotificaitonlistComponent } from './notificaitonlist/notificaitonlist.component';



@NgModule({
  declarations: [AppComponent,SidemenuComponent,ImagesliderComponent,SelectstateComponent,VersioncheckComponent,BloghomeComponent,NotificaitonlistComponent],
  imports: [BrowserModule, HammerModule, IonicModule.forRoot(), IonicStorageModule.forRoot(), AppRoutingModule,HttpClientModule,FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
