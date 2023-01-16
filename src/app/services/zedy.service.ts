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
  async changeTitle(component: any) {
    let lang = document.documentElement.lang;
    let config = await this.localApi('configrations');
    let title = document.querySelector('title');
    let setTitle = (pageTitle: string) => {
      if (lang == 'ar') {
        if (title) {
          title.innerHTML = pageTitle + config.ar_title;
        }
      } else {
        if (title) {
          title.innerHTML = pageTitle + config.title;
        }
      }
    };
    if (lang == 'ar') {
      switch (component) {
        case 'LandingComponent':
          setTitle('الرئيسية - ');
          break;
        case 'AboutPageComponent':
          setTitle('من نحن - ');
          break;
        case 'ClientPageComponent':
          setTitle('عملاؤنا - ');
          break;
        case 'JoinPageComponent':
          setTitle('انضم إلينا - ');
          break;
        case 'LearnPageComponent':
          setTitle('تعلم معنا - ');
          break;
        case 'ServicesPageComponent':
          setTitle('خدماتنا - ');
          break;
      }
    } else {
      switch (component) {
        case 'LandingComponent':
          setTitle('Home - ');
          break;
        case 'AboutPageComponent':
          setTitle('About Us - ');
          break;
        case 'ClientPageComponent':
          setTitle('Our Clients - ');
          break;
        case 'JoinPageComponent':
          setTitle('Join Us - ');
          break;
        case 'LearnPageComponent':
          setTitle('Learn With Us - ');
          break;
        case 'ServicesPageComponent':
          setTitle('Services - ');
          break;
      }
    }
  }
  goTop() {
    window.scrollTo(0, 0);
  }
}
