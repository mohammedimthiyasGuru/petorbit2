import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-selectstate',
  templateUrl: './selectstate.component.html',
  styleUrls: ['./selectstate.component.scss'],
})
export class SelectstateComponent implements OnInit {

  constructor(public router: Router){
    
  }
  ngOnInit(): void {

  }

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

  selectedCategory: any = null;

  selectCategory(category: any) {
    if (this.selectedCategory) {
      this.selectedCategory.selected = false;
    }
    category.selected = true;
    this.selectedCategory = category;
  }

  next_city(){
    this.router.navigateByUrl('/home', { replaceUrl: true });
  }

}
