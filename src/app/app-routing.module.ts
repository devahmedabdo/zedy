import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './views/landing/landing.component';
import { ServicesPageComponent } from './views/services-page/services-page.component';
import { ClientPageComponent } from './views/client-page/client-page.component';
import { LearnPageComponent } from './views/learn-page/learn-page.component';
import { JoinPageComponent } from './views/join-page/join-page.component';
import { AboutPageComponent } from './views/about-page/about-page.component';

const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: 'services', component: ServicesPageComponent },
  { path: 'clients', component: ClientPageComponent },
  { path: 'learn', component: LearnPageComponent },
  { path: 'join', component: JoinPageComponent },
  {
    path: 'about',
    component: AboutPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
