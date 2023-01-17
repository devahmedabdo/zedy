import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ZedyService {
  url: string = 'http://api.z-edy.com/api/';
  constructor(private http: HttpClient) {}
  private subject = new Subject<any>();
  setItems() {
    this.subject.next(null);
  }
  getItems(): Observable<any> {
    return this.subject.asObservable();
  }
  getData(api: string) {
    return this.http.get(this.url + api);
  }
  removeRveal() {
    setTimeout(() => {
      let animationClass = document.querySelectorAll(
        '.lReveal , .dReveal,.uReveal,.rReveal'
      );
      animationClass.forEach((e) => {
        e.classList.add('reveal');
      });
    }, 111);
  }

  async localApi(api: string) {
    let setLocal = async (position: string, data: any) => {
      let strData = await JSON.stringify(data);
      window.sessionStorage.setItem(position, strData);
    };
    let config = await JSON.parse(window.sessionStorage.getItem(api)!);
    if (config) {
      return config;
    }
    return this.getData(api)
      .toPromise()
      .then((data: any) => {
        setLocal(api, data['data']);
        return data['data'];
      });
  }
  setTitle(pageTitle: string, title: string) {
    // console.log(pageTitle + title);
    console.log('pageTitle + title');
    // document.title = pageTitle + title;
    // if (lang == 'ar') {
    //   // console.log(title?.innerText);
    //   // console.log(title?.innerText);
    //   console.log('pageTitle' + config.ar_title);
    // } else {
    //   // console.log(title?.innerText);
    //   title.textContent = pageTitle + config.title;
    //   // console.log(title?.innerText);
    //   console.log('pageTitle' + config.title);
    // }
  }
  async changeTitle(component: string) {
    let lang = document.documentElement.lang;
    let config = await this.localApi('configrations');
    // let title = document.querySelector('title') as HTMLTitleElement;
    // console.log('changing title');
    // console.log(title);
    // console.log(lang);
    // console.log('pageTitle ' + config.ar_title);
    if (lang == 'ar') {
      console.log('ar');
      switch (component) {
        case 'LandingComponent':
          await this.setTitle('الرئيسية - ', config.ar_title);
          break;
        case 'AboutPageComponent':
          await this.setTitle('من نحن - ', config.ar_title);
          break;
        case 'ClientPageComponent':
          await this.setTitle('عملاؤنا - ', config.ar_title);
          break;
        case 'JoinPageComponent':
          await this.setTitle('انضم إلينا - ', config.ar_title);
          break;
        case 'LearnPageComponent':
          await this.setTitle('تعلم معنا - ', config.ar_title);
          break;
        case 'ServicesPageComponent':
          await this.setTitle('خدماتنا - ', config.ar_title);
          break;
      }
    } else {
      console.log('en');
      switch (component) {
        case 'LandingComponent':
          await this.setTitle('Home - ', config.title);
          break;
        case 'AboutPageComponent':
          await this.setTitle('About Us - ', config.title);
          break;
        case 'ClientPageComponent':
          await this.setTitle('Our Clients - ', config.title);
          break;
        case 'JoinPageComponent':
          await this.setTitle('Join Us - ', config.title);
          break;
        case 'LearnPageComponent':
          await this.setTitle('Learn With Us - ', config.title);
          break;
        case 'ServicesPageComponent':
          await this.setTitle('Services - ', config.title);
          break;
      }
    }
  }
  goTop() {
    window.scrollTo(0, 0);
  }
}
