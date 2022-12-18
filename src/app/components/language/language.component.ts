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
  configuration: any;
  lang: string = 'ar';
  setLang = async (lang: any) => {
    this.lang = lang;
    document.documentElement.lang = lang;
    localStorage.setItem('lang', lang);
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    await this.zedy.getConfig().subscribe({
      next: (config: any) => {
        this.configuration = config['data'];
        if (lang == 'ar') {
          document.title = this.configuration.ar_title;
        } else {
          document.title = this.configuration.title;
        }
      },
      error: (error) => {
        console.log(error);
      },
    });
  };

  getConfig() {
    this.zedy.getConfig().subscribe({
      next: (config: any) => {
        this.configuration = config['data'];
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  ngOnInit(): void {
    // this.getConfig();
    this.lang = localStorage.getItem('lang') || 'ar';
    this.setLang(this.lang);
    //
    // const languageBox = document.querySelectorAll('.lang');
    // languageBox.forEach(function (e: any) {
    //   e.onclick = function () {
    //     this.children[1].classList.toggle('active');
    //   };
    // });
  }
}
