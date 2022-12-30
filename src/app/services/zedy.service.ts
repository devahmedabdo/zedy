import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ZedyService {
  url: string = 'http://api.z-edy.com/api/';
  constructor(private http: HttpClient) {}
  getVideos() {
    return this.http.get(this.url + 'videos?type=videos');
  }
  getClients() {
    return this.http.get(this.url + 'clients');
  }
  getSomeClients() {
    return this.http.get(this.url + 'clients?limit=12');
  }
  getFields() {
    return this.http.get(this.url + 'fields');
  }
  getClientReviews() {
    return this.http.get(this.url + 'client-reviews');
  }
  getJobs() {
    return this.http.get(this.url + 'jobs');
  }
  getServices() {
    return this.http.get(this.url + 'services');
  }
  getTeam() {
    return this.http.get(this.url + 'employees');
  }
  getConfig() {
    return this.http.get(this.url + 'configrations');
  }
  removeRveal() {
    setTimeout(() => {
      let animationClass = document.querySelectorAll(
        '.lReveal , .dReveal,.uReveal,.rReveal'
      );
      animationClass.forEach((e) => {
        // if (e.getBoundingClientRect().top < 600) {
        //   e.classList.add('reveal');
        // } else {
        // }
        // e.classList.remove('reveal');
        e.classList.add('reveal');
      });
    }, 111);
  }
}
