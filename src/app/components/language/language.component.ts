import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ZedyService } from 'src/app/services/zedy.service';
@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss'],
})
export class LanguageComponent implements OnInit {
  constructor(private translate: TranslateService, private zedy: ZedyService) {}
  lang: string = 'ar';
  keyword = document.getElementsByTagName('meta')[2];
  description = document.getElementsByTagName('meta')[3];
  setLang = async (lang: any) => {
    this.lang = lang;
    document.documentElement.lang = lang;
    localStorage.setItem('lang', lang);
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    let config = await this.zedy.localApi('configuration');
    if (lang == 'ar') {
      this.keyword.setAttribute('content', config.header_keywords);
      this.description.setAttribute('content', config.description);
    } else {
      this.keyword.setAttribute('content', config.en_header_keywords);
      this.description.setAttribute('content', config.en_description);
    }
    await this.zedy.setItems();
  };

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'ar';
    this.setLang(this.lang);
  }
}
