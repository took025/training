import { Component, OnInit, ViewChild, ElementRef   } from '@angular/core';
import {OwlCarousel} from 'ngx-owl-carousel';
import { trigger, transition, style, animate } from '@angular/animations';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { DragScrollComponent } from 'ngx-drag-scroll';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  // animations:[
  //   trigger('fade', [
  //     transition('void => *', [style({ opacity: 0 }), animate('500ms', style({ opacity: 1 }))]),
  //     transition('* => void', [style({ opacity: 1 }), animate('500ms', style({ opacity: 0 }))]),



  //     //       transition('void => *', [style({ transform: 'translateX(0px)',}),
  //     //  animate('900ms', style({ transform: 'translateX(100%)',}) )]),


  //     // transition('* => void', [style({ transform: 'translateX(-100%)', }),
  //     //  animate('900ms', style({ transform: 'translateX(0px)', }))]),
  //   ])
  // ]
})
export class CarouselComponent  {
  activateClass(subModule) {
    subModule.active = !subModule.active;
  }
  public arr = ['foo', 'bar', 'baz'];
  @ViewChild('nav', {read: DragScrollComponent, static: true}) ds: DragScrollComponent;
// @ViewChild('panel', { read: ElementRef }) public panel: ElementRef<any>;
current = 2;

moveLeft(index) {
  index = this.current -= 2;
  if (this.current < 2) {
    this.current = this.slides.length;
  }
  this.ds.moveTo(index);
}

moveRight(index) {
  index = this.current += 2;
  if (this.current >= this.slides.length - 2) {
    this.current =  -2;
  }
  // if (this.current === 0 ) {
  //   this.current = 2;
  //   this.current += 2;
  // }
  this.ds.moveTo(index);
}
// moveTo(index) {
//   this.ds.moveTo(index);
//   return this.current = this.current + 2;
// }

// tslint:disable-next-line: use-lifecycle-interface
ngAfterViewInit() {
  // Starting ngx-drag-scroll from specified index(3)
  setTimeout(() => {
    this.ds.moveTo(0);
  }, 0);
}

// public onPreviousSearchPosition(): void {
//   this.panel.nativeElement.scrollTop -= 20;
// }

// public onNextSearchPosition(): void {
//   this.panel.nativeElement.scroll += 20;
// }

  // sliderTiming = 4000;
  // scroll(el: HTMLElement) {
  //   el.scrollIntoView({behavior: 'smooth'});
  // }
//   items: Array<any> = [];
//   inputValue = '';
//   hori = false;
//   odd = 'odd';
//   even = 'even';
//   boxes = '';
//   array = []

//   constructor() {
//     this.items = [
// // tslint:disable-next-line: max-line-length
// tslint:disable-next-line: max-line-length
//       {name : 'http://www.hereandabroad.com/wp-content/gallery/le-mas-des-alpilles-at-domaine-de-st-remy/facade-2-mas-des-alpilles-luxury-provence-rental-900x600-900x600.jpg'},
//       {name : 'http://i.imgur.com/tSrs2.jpg'},
//       {name : 'https://www.lagarganta.com/wp-content/uploads/2018/06/entorno-la-garganta-900x600.jpg'},
//       {name : 'http://aiesec.at/wp-content/uploads/2015/07/5718269042_8b2181bed8_o-900x600.png'},
//     ];
//   }



// constructor(config: NgbCarouselConfig) {
//   config.interval = 2000;
//   config.wrap = false;
//   config.keyboard = false;
//   config.pauseOnHover = false;
// }
// slides = [
//   {
//     url: '../../assets/images/geocel.svg',
//     text : 'holiday 1'
//   },
//   {
//     url: '../../assets/images/geocel.svg',
//     text : 'holiday 2'
//   },
//   {
//     url: '../../assets/images/geocel.svg',
//     text : 'holiday3'
//   },
//   {
//     url: '../../assets/images/geocel.svg',
//         text : 'holiday 5'
//   },
//   {
//     url: '../../assets/images/geocel.svg',
//         text : 'holiday 4'
//   },
//   {
//     url: '../../assets/images/geocel.svg',
//         text : 'holiday 6'
//   },
//   {
//     url: '../../assets/images/geocel.svg',
//         text : 'holiday 6'
//   },
//   {
//     url: '../../assets/images/geocel.svg',
//         text : 'holiday 6'
//   },
//   {
//     url: '../../assets/images/geocel.svg',
//         text : 'holiday 6'
//   },
// ];
// public moveToSpecificView(): void {
//   setTimeout(() => {
//       this.panel.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
//   });
// }


// tslint:disable-next-line: member-ordering
slides = [
  {
    url: 'https://searchengineland.com/figz/wp-content/seloads/2016/03/google-analytics-360e-1920-800x450.jpg',
    text : 'holiday 1',
    item: 'dragscrollitem'
  },
  {
    url: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/10D88/production/_103600096_mediaitem103600095.jpg',
    text : 'holiday 2'
  },
  {
    url: 'https://searchengineland.com/figz/wp-content/seloads/2016/03/google-analytics-360e-1920-800x450.jpg',
    text : 'holiday3'
  },
  {
    url: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/10D88/production/_103600096_mediaitem103600095.jpg',
        text : 'holiday 5'
  },
  {
    url: 'https://searchengineland.com/figz/wp-content/seloads/2016/03/google-analytics-360e-1920-800x450.jpg',
        text : 'holiday 4'
  },
  {
    url: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/10D88/production/_103600096_mediaitem103600095.jpg',
        text : 'holiday 6'
  },
  {
    url: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/10D88/production/_103600096_mediaitem103600095.jpg',
        text : 'holiday 6'
  },
  {
    url: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/10D88/production/_103600096_mediaitem103600095.jpg',
        text : 'holiday 6'
  },
  {
    url: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/10D88/production/_103600096_mediaitem103600095.jpg',
        text : 'holiday 6'
  },
  {
    url: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/10D88/production/_103600096_mediaitem103600095.jpg',
        text : 'holiday 6'
  },
  {
    url: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/10D88/production/_103600096_mediaitem103600095.jpg',
        text : 'holiday 6'
  },
  {
    url: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/10D88/production/_103600096_mediaitem103600095.jpg',
        text : 'holiday 6'
  },
  {
    url: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/10D88/production/_103600096_mediaitem103600095.jpg',
        text : 'holiday 6'
  },
  {
    url: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/10D88/production/_103600096_mediaitem103600095.jpg',
        text : 'holiday 6'
  },
  {
    url: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/10D88/production/_103600096_mediaitem103600095.jpg',
        text : 'holiday 6'
  },
  {
    url: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/10D88/production/_103600096_mediaitem103600095.jpg',
        text : 'holiday 6'
  },
  {
    url: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/10D88/production/_103600096_mediaitem103600095.jpg',
        text : 'holiday 6'
  },
  {
    url: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/10D88/production/_103600096_mediaitem103600095.jpg',
        text : 'holiday 6'
  },
  {
    url: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/10D88/production/_103600096_mediaitem103600095.jpg',
        text : 'holiday 6'
  },
  {
    url: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/10D88/production/_103600096_mediaitem103600095.jpg',
        text : 'holiday 6'
  },
  {
    url: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/10D88/production/_103600096_mediaitem103600095.jpg',
        text : 'holiday 6'
  },
  {
    url: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/10D88/production/_103600096_mediaitem103600095.jpg',
        text : 'holiday 6'
  },
  {
    url: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/10D88/production/_103600096_mediaitem103600095.jpg',
        text : 'holiday 6'
  },
  {
    url: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/10D88/production/_103600096_mediaitem103600095.jpg',
        text : 'holiday 6'
  },
];
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
    const copy = this.slides.splice( 2 , 0 );
    // console.log(copy);
    console.log(this.current);

  }



  // current = 0;
  // // tslint:disable-next-line: variable-name
  // img_list = [
  //   'https://ichef.bbci.co.uk/news/660/cpsprodpb/10D88/production/_103600096_mediaitem103600095.jpg',
  //   'https://searchengineland.com/figz/wp-content/seloads/2016/03/google-analytics-360e-1920-800x450.jpg',
  //   'https://www.whatsappprofiledpimages.com/wp-content/uploads/2019/01/d3kqway-c2442b67-aa9f-4840--300x266.jpg',
  // ];

  // tslint:disable-next-line: use-lifecycle-interface
  // ngOnInit() {
  //   setInterval(() => {
  //     this.current = ++this.current % this.img_list.length;
  //   }, this.sliderTiming);
  // }

}
