import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import {UtilityService} from './utility.service'

import { Keyboard } from '@capacitor/keyboard';


import { FcmService } from './fcm.service';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
   
   


  constructor(private platform: Platform,public router: Router,private storage: UtilityService,private fcmService: FcmService) {
    this.initializeApp();
    this.fcmService.init();


  }

  async initializeApp() { 
    this.platform.ready().then(() => {
      Keyboard.addListener('keyboardWillShow', (info) => {
        console.log('Keyboard will show with height:', info.keyboardHeight);
        // Implement logic to adjust the scroll position or view
      });
      Keyboard.addListener('keyboardWillHide', () => {
        console.log('Keyboard will hide');
        // Implement logic to reset the scroll position or view
      });
    });
  }






}
