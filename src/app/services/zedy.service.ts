import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Title } from '@angular/platform-browser';
@Injectable({
  providedIn: 'root',
})
export class ZedyService {
  url: string = 'http://api.z-edy.com/api/';
  constructor(private http: HttpClient, private title: Title) {}
  private subject = new Subject<any>();
  setItems() {
    this.subject.next(null);
  }
  getItems(): Observable<any> {
    return this.subject.asObservable();
  }
  // getData(api: string): Observable<any> {
  //   return this.http.get(this.url + api);
  // }
  get(api: string): Observable<any> {
    let localData: any = sessionStorage.getItem(api);
    if (localData) {
      console.log('local => ', JSON.parse(localData));
      return localData.asObservable();
    }
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

  // async localApi(api: string) {
  //   let setLocal = async (position: string, data: any) => {
  //     let strData = await JSON.stringify(data);
  //     window.sessionStorage.setItem(position, strData);
  //   };
  //   let config = await JSON.parse(window.sessionStorage.getItem(api)!);
  //   if (config) {
  //     return config;
  //   }
  //   return this.getData(api)
  //     .toPromise()
  //     .then((data: any) => {
  //       setLocal(api, data['data']);
  //       return data['data'];
  //     });
  // }
  async setTitle(arPageTitle: string, enPageTitle: string) {
    let lang = document.documentElement.lang;
    let config = await this.localApi('configrations');
    if (lang == 'ar') {
      this.title.setTitle(arPageTitle + config.ar_title);
    } else {
      this.title.setTitle(enPageTitle + config.title);
    }
  }
  changeTitle(component: string) {
    switch (component) {
      case 'LandingComponent':
        this.setTitle('الرئيسية - ', 'Home - ');
        break;
      case 'AboutPageComponent':
        this.setTitle('من نحن - ', 'About Us - ');
        break;
      case 'ClientPageComponent':
        this.setTitle('عملاؤنا - ', 'Our Clients - ');
        break;
      case 'JoinPageComponent':
        this.setTitle('انضم إلينا - ', 'Join Us - ');
        break;
      case 'LearnPageComponent':
        this.setTitle('تعلم معنا - ', 'Learn With Us - ');
        break;
      case 'ServicesPageComponent':
        this.setTitle('خدماتنا - ', 'Services - ');
        break;
    }
  }
  saveData(key: string, data: any) {
    sessionStorage.setItem(key, JSON.stringify(data));
  }
  goTop() {
    window.scrollTo(0, 0);
  }
}
