import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bloghome',
  templateUrl: './bloghome.component.html',
  styleUrls: ['./bloghome.component.scss'],
})
export class BloghomeComponent  implements OnInit {

  categories = [

    { "name": "Tamil Nadu", "iconClass": "../../../assets/states/tamilnad.webp", "selected": false },
    { "name": "Kerala", "iconClass": "../../../assets/states/kerala.webp", "selected": false },
    { "name": "Karnataka", "iconClass": "../../../assets/states/karnataka.webp", "selected": false },
    { "name": "Maharashtra", "iconClass": "../../../assets/states/maharashta.webp", "selected": false },
    { "name": "Karnataka", "iconClass": "../../../assets/states/karnataka.webp", "selected": false },
    { "name": "Delhi", "iconClass": "../../../assets/states/Delhi.webp", "selected": false },
    { "name": "Uttarakhand", "iconClass": "../../../assets/states/uttarakhand.webp", "selected": false },
    { "name": "Gujarat", "iconClass": "../../../assets/states/Gujarat.webp", "selected": false },


  ];
  
  constructor(public router: Router) { }

  ngOnInit() {}

  activeTab: string = 'top';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

 

  moveto(){
    setTimeout(async () => {
      this.router.navigateByUrl('/home/blog/view', { replaceUrl: true });
    }, 1000);
    
  }

}
