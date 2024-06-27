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
  lang: any = localStorage.getItem('lang');
  loading: any = true;
  constructor(private route: ActivatedRoute, private zedy: ZedyService) {
    this.route.params.subscribe((par) => {
      this.id = par['id'];
      this.getVideo(this.id);
    });
    this.zedy.subject.subscribe((data) => {
      this.changeTitle();
      this.lang = data;
    });
  }
  video: any;
  ngOnInit(): void {
    this.changeTitle();
  }
  getVideo(id: any) {
    this.loading = true;
    this.zedy.get('videos/' + id).subscribe({
      next: (video) => {
        this.video = video.data;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        console.log(err);
      },
    });
  }
  playVideo(btn: any): void {
    let playBtn = btn.target as HTMLElement;
    let video = playBtn.nextElementSibling as HTMLEmbedElement;
    if (video) {
      video.src += '?autoplay=1';
      playBtn.remove();
    }
  }
  changeTitle() {
    this.zedy.setTitle({
      ar: 'تعلم معنا',
      en: 'Learn With Us',
    });
  }
}
