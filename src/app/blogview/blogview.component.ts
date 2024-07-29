import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogview',
  templateUrl: './blogview.component.html',
  styleUrls: ['./blogview.component.scss'],
})
export class BlogviewComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}



  items = [
    {
      id: 1,
      imgSrc: '../../assets/states/Delhi.webp',
      title: 'Cyberpunk 2077 release date, price, trailers, gameplay and news',
      rating: '⭐ 4.5',
      time: '43 sec ago',
      views: '7k Views',
      visible : false,
      shareCount : 0,
      likeCount: 0,
      authorImgSrc: '../../assets/appimage/dog.png',
      authorName: 'Samsad Rashid',
      description: `The Cyberpunk 2077 release date was delayed to September 17, meaning it won’t be hacking into our digital lives this April after all. The game is complete, says developer CD Projekt Red, but the extra time allows for more delay.The Cyberpunk 2077 release date was delayed to September 17, meaning it won’t be hacking into our digital lives this April after all. The game is complete, says developer CD Projekt Red, but the extra time allows for more delay.The Cyberpunk 2077 release date was delayed to September 17, meaning it won’t be hacking into our digital lives this April after all. The game is complete, says developer CD Projekt Red, but the extra time allows for more delay.The Cyberpunk 2077 release date was delayed to September 17, meaning it won’t be hacking into our digital lives this April after all. The game is complete, says developer CD Projekt Red, but the extra time allows for more delay.The Cyberpunk 2077 release date was delayed to September 17, meaning it won’t be hacking into our digital lives this April after all. The game is complete, says developer CD Projekt Red, but the extra time allows for more delay.The Cyberpunk 2077 release date was delayed to September 17, meaning it won’t be hacking into our digital lives this April after all. The game is complete, says developer CD Projekt Red, but the extra time allows for more delay.`
    },
    {
      id: 1,
      imgSrc: '../../assets/states/Delhi.webp',
      title: 'Cyberpunk 2077 release date, price, trailers, gameplay and news',
      rating: '⭐ 4.5',
      time: '42 sec ago',
      views: '10k Views',
      visible : false,
      shareCount : 0,
      likeCount: 0,
      authorImgSrc: '../../assets/appimage/dog.png',
      authorName: 'Samsad Rashid',
      description: `The Cyberpunk 2077 release date was delayed to September 17, meaning it won’t be hacking into our digital lives this April after all. The game is complete, says developer CD Projekt Red, but the extra time allows for more delay.`
    },
    // Add more items as needed
  ];

  onSwipe(event: any) {
    console.log(event)
    if (event.deltaX > 0) {
      this.prev();
    } else {
      this.next();
    }
  }


  isExpanded = 'Read Now'; // Track the expanded item

 


  currentIndex = 0;
  currentExpandedIndex: number | null = null; // Track the expanded card

  expandCard(index: number) {
    this.currentExpandedIndex = this.currentExpandedIndex === index ? null : index;
    this.items[index].visible = this.items[index].visible === false ? true : false;
    this.isExpanded = this.isExpanded === 'Read Now' ? 'Read Less' : 'Read Now';
  }

  getCardClass(index: number) {
    return this.currentExpandedIndex === index ? 'card-content expanded' : 'card-content';
  }
  

  next() {
    if (this.currentIndex < this.items.length - 1) {
      this.currentIndex++;
    }
    console.log(this.currentIndex)
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
    console.log(this.currentIndex)
  }





  truncateDescription(description: string): string {
    const maxLines = 4; // Number of lines to show
    const lines = description.split('\n');
    if (lines.length <= maxLines) {
      return description;
    }
    return lines.slice(0, maxLines).join('\n') + '...';
  }



  share(item: any) {
    item.shareCount++;
    // Your share logic here
  }

  like(item: any) {
    item.likeCount++;
    // Your like logic here
  }

}
