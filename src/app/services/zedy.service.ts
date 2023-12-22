import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, catchError, map, of } from 'rxjs';
import { Title } from '@angular/platform-browser';
@Injectable({
  providedIn: 'root',
})
export class ZedyService {
  url: string = 'https://dmc-dashboard.vercel.app/';
  // url: string = 'http://api.z-edy.com/api/';
  constructor(private http: HttpClient, private title: Title) {}
  subject = new Subject<any>();
  get(api: string): Observable<any> {
    let localData: any = sessionStorage.getItem(api);
    if (localData) {
      console.log('local => ', JSON.parse(localData));
      return of(JSON.parse(localData));
    }
    return this.http.get(this.url + api).pipe(
      map((data: any) => {
        console.log('API Data => ', data);
        // Save data in sessionStorage
        sessionStorage.setItem(api, JSON.stringify(data));
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

  lang: string = localStorage.getItem('lang') || 'ar';
  config: any;
  setTitle(title: any) {
    if (this.config) {
      return this.title.setTitle(
        title[this.lang] + this.config.title[this.lang]
      );
    }
    this.get('configrations').subscribe({
      next: (config) => {
        this.config = config;
        this.config.title = {
          ar: config.ar_title,
          en: config.title,
        };
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  goTop() {
    window.scrollTo(0, 0);
  }
}
