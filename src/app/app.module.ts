import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LandingComponent } from './views/landing/landing.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ServicesComponent } from './components/services/services.component';
import { FieldsComponent } from './components/fields/fields.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { ClientsComponent } from './components/clients/clients.component';
import { TeamComponent } from './components/team/team.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FindUsComponent } from './components/find-us/find-us.component';
import { LanguageComponent } from './components/language/language.component';
// import ngx-translate and the http loader
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
// import swiper
import { SwiperModule } from 'swiper/angular';

import { LoadComponent } from './components/load/load.component';
import { ServicesPageComponent } from './views/services-page/services-page.component';
import { ClientPageComponent } from './views/client-page/client-page.component';
import { AllClientsComponent } from './components/all-clients/all-clients.component';
import { LearnPageComponent } from './views/learn-page/learn-page.component';
import { JoinPageComponent } from './views/join-page/join-page.component';
import { AboutPageComponent } from './views/about-page/about-page.component';
import { OpinionsComponent } from './components/opinions/opinions.component';
import { SafePipe } from './pipes/safe.pipe';

import { ZedyService } from './services/zedy.service';
//
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    FooterComponent,
    ServicesComponent,
    FieldsComponent,
    WhyUsComponent,
    ClientsComponent,
    TeamComponent,
    PortfolioComponent,
    FindUsComponent,
    LanguageComponent,

    LoadComponent,
    ServicesPageComponent,
    ClientPageComponent,
    AllClientsComponent,
    LearnPageComponent,
    JoinPageComponent,
    AboutPageComponent,
    OpinionsComponent,
    SafePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    SwiperModule,
    // ngx-translate and the loader module
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [ZedyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
