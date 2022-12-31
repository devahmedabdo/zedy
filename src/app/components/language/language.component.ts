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
    await this.zedy.getConfig().subscribe({
      next: (config: any) => {
        if (lang == 'ar') {
          this.keyword.setAttribute('content', config['data'].header_keywords);
          this.description.setAttribute('content', config['data'].description);
          document.title = config['data'].ar_title;
        } else {
          this.keyword.setAttribute(
            'content',
            config['data'].en_header_keywords
          );
          this.description.setAttribute(
            'content',
            config['data'].en_description
          );
          document.title = config['data'].title;
        }
      },
      error: () => {
        if (this.lang == 'ar') {
          this.keyword.setAttribute(
            'content',
            'الزيدي ، تسويق ، شركة ، عبدالرحمن الزيدي ، برمجة ، موقع الكتروني ، وكالة، سوشيال ميديا، فيديوهات، إعلانات'
          );
          this.description.setAttribute(
            'content',
            'الموقع الرسمي لشركة الزيدي لخدمات التسويق و البرمجة '
          );
          document.title = 'زيدي لخدمات التسويق';
        } else {
          this.keyword.setAttribute(
            'content',
            'zedy, marketing, business, agency, abdelrahman elzedy , software, website, social media, multi media, videos'
          );
          this.description.setAttribute(
            'content',
            'Zedy Marketing & Software Agency Official Page'
          );
          document.title = 'Zedy Marketing Agency';
        }
      },
    });
  };

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'ar';
    this.setLang(this.lang);
  }
}
