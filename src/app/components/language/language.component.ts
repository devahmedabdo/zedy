import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss'],
})
export class LanguageComponent implements OnInit {
  constructor(private translate: TranslateService) {}

  lang: string = 'en';
  setLang(lang: any) {
    this.lang = lang;
    document.documentElement.lang = lang;
    localStorage.setItem('lang', lang);
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
  }
  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'en';
    this.setLang(this.lang);

    //
    const languageBox = document.querySelectorAll('.lang');
    languageBox.forEach(function (e: any) {
      e.onclick = function () {
        this.children[1].classList.toggle('active');
      };
    });
  }
}
