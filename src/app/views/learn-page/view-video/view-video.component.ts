import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ZedyService } from 'src/app/services/zedy.service';

@Component({
  selector: 'app-view-video',
  templateUrl: './view-video.component.html',
  styleUrls: ['./view-video.component.scss'],
})
export class ViewVideoComponent implements OnInit {
  id: any;
  loading: any = true;
  constructor(
    private route: ActivatedRoute,
    private zedy: ZedyService,
  ) {
    this.route.params.subscribe((par) => {
      this.id = par['id'];
      this.getVideo(this.id);
      console.log(this.id)
    });
  }
video:any
  ngOnInit(): void {}
  getVideo(id: any) {
    this.loading = true;
    //
    let data = {
      data: {
        item: {
          id: 1,
          item_order: null,
          type: 'videos',
          path: 'JtsemNHLGeI&list=PLDoPjvoNmBAzqag2d8Rnz2gBdrDlOxv4B&index=2',
          name: 'video name',
          ar_name: 'اسم الفديو',
          user_id: 1,
          deleted_at: null,
          created_at: '2023-07-20 12:26:53',
          updated_at: null,
        },
        items: [
          {
            id: 2,
            item_order: null,
            type: 'videos',
            path: 'uploads/services/Online marketing.webp',
            name: 'Welcome to slash for marketing and programming services',
            ar_name: 'أهلاً بك فى زيدي لخدمات التسويق و البرمجة',
            user_id: 1,
            deleted_at: null,
            created_at: '2023-07-20 12:26:53',
            updated_at: null,
          },
        ],
      },
      status: 'success',
      error: null,
    };
    this.video = data.data
    return
    //
    this.zedy.get('videos?' + id).subscribe({
      next: (video) => {
        console.log('videos', video);
        this.loading = false;

      },
      error: (err) => {
        this.loading = false;
        console.log(err);
      },
    });
  }
}
