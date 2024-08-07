import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ZedyService } from 'src/app/services/zedy.service';
@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss'],
})
export class LanguageComponent implements OnInit {
  constructor(private translate: TranslateService, private zedy: ZedyService) {
    this.zedy.subject.subscribe({
      next: (data) => {
        this.lang = data;
      },
    });
  }
  lang: string = 'ar';
  setLang(lang: any) {
    this.lang = lang;
    document.documentElement.lang = lang;
    localStorage.setItem('lang', lang);
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    this.zedy.subject.next(lang);
  }

  ngOnInit() {
    this.setLang(this.lang);
  }
}
