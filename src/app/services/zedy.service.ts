import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, catchError, map, of } from 'rxjs';
import { Title } from '@angular/platform-browser';
@Injectable({
  providedIn: 'root',
})
export class ZedyService {
  // url: string = 'https://dmc-dashboard.vercel.app/';
  url: string = 'http://api.z-edy.com/api/';
  constructor(private http: HttpClient, private title: Title) {}
  subject = new Subject<any>();
  get(api: string): Observable<any> {
    let localData: any = sessionStorage.getItem(api);
    if (localData) {
      if (api == 'configrations') {
        this.config = JSON.parse(localData).data;
        this.config.title = {
          ar: JSON.parse(localData).data.ar_title,
          en: JSON.parse(localData).data.title,
        };
      }
      return of(JSON.parse(localData));
    }
    return this.http.get(this.url + api).pipe(
      map((data: any) => {
        // console.log('API Data => ', data);
        // Save data in sessionStorage
        sessionStorage.setItem(api, JSON.stringify(data));
        if (api == 'configrations') {
          this.config = data.data;
          this.config.title = {
            ar: data.data.ar_title,
            en: data.data.title,
          };
        }
        return data; // Return the fetched data
      }),
      catchError((error: any) => {
        // Handle errors here if needed
        console.error('Error fetching data from API', error);
        throw error;
      })
    );
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
  config: any;
  setTitle(title: any) {
    let lang: string = localStorage.getItem('lang') || 'ar';
    this.title.setTitle(title[lang] + ' - ' + this.config?.title?.[lang]);
  }
  goTop() {
    window.scrollTo(0, 0);
  }
}
