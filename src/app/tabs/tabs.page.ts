import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

     // Example variables for badge counts
     new_message: number = 1;
     new_activities: number = 1;
     
  constructor() {}

}
