import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UtilityService} from '../utility.service'

@Component({
  selector: 'app-imageslider',
  templateUrl: './imageslider.component.html',
  styleUrls: ['./imageslider.component.scss'],
})
export class ImagesliderComponent  implements OnInit {

  constructor(
    public router: Router,
    private storage: UtilityService
  ) {

  }

  ngOnInit() {}

 async startApp() {
    await this.storage.set('login_status',true);
    this.router.navigateByUrl('', { replaceUrl: true });
  }

}
