import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ZedyService } from './../../services/zedy.service';
import SwiperCore, {
  Pagination,
  SwiperOptions,
  Scrollbar,
  Autoplay,
} from 'swiper';
// install Swiper modules
SwiperCore.use([Pagination, Scrollbar, Autoplay]);
@Component({
  selector: 'app-opinions',
  templateUrl: './opinions.component.html',
  styleUrls: ['./opinions.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OpinionsComponent implements OnInit {
  config: SwiperOptions = {
    grabCursor: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    spaceBetween: 50,
    breakpoints: {
      800: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      900: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
    loop: true,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
  };
  constructor(private zedy: ZedyService) {}
  opinions: any[] = [];
  ngOnInit() {
    this.zedy.get('client-reviews').subscribe({
      next: (data) => {
        this.opinions = data.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
