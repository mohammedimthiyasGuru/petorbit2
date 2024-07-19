import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { StatusBar, Style } from '@capacitor/status-bar';

import {UtilityService} from './utility.service'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
   
   loading_status = true;


  constructor(private platform: Platform,public router: Router,private storage: UtilityService ) {
    this.initializeApp();
  }

  async initializeApp() {
    let login_status = await this.storage.get('login_status');
    console.log(login_status);
    setTimeout(async () => {
      this.loading_status = false;
      if(login_status){
        this.router.navigateByUrl('');
      } else {
        await this.storage.set('login_status',true);
        this.router.navigateByUrl('/Slider');
      }
    }, 3000);

  

  }



}
