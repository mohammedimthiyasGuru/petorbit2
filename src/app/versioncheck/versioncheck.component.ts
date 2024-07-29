import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';
import { Router } from '@angular/router';
import { Browser } from '@capacitor/browser';

import { Platform, IonRouterOutlet, AlertController } from '@ionic/angular';
import { Location } from '@angular/common';

@Component({
  selector: 'app-versioncheck',
  templateUrl: './versioncheck.component.html',
  styleUrls: ['./versioncheck.component.scss'],
})
export class VersioncheckComponent  implements OnInit {


  data: any;
  loading_status = false;

  constructor(private apiService: UtilityService,public router: Router,
    private platform: Platform,
    private location: Location,
    private routerOutlet: IonRouterOutlet,
    private alertController: AlertController
  ) { 
    this.platform.backButton.subscribeWithPriority(10, () => {
      console.log(this.routerOutlet);
      if (this.routerOutlet && this.routerOutlet.canGoBack()) {
        this.showCustomAlert();
      } else {
        console.log('No pages to go back to');
      }
    });
  }

  ngOnInit() {
    this.getData();
    setTimeout(async () => {
      this.loading_status = true;
    }, 3000);
  }

  getData() {
    this.apiService.get('employees').subscribe(
      response => {
       console.log(response);
      },
      error => {
        console.error('Error fetching data:', error);
      }
    );
  }


  skip(){
    this.router.navigateByUrl('/Slider', { replaceUrl: true });
  }

  async openPlayStore() {
    await Browser.open({ url: 'https://play.google.com/store/apps/details?id=com.example.yourapp' });
  }


  async showCustomAlert() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Do you really want to exit?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }, {
          text: 'Exit',
          handler: () => {
            (navigator as any).app.exitApp();
          }
        }
      ]
    });

    await alert.present();
  }










}
