import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SinglepostPage } from '../pages/singlepost/singlepost'

import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FeedPageModule } from '../pages/feed/feed.module';
import { MovieProvider } from '../providers/movie/movie';
import { CategoriasPage } from '../pages/categorias/categorias';
import { PesquisarPage } from '../pages/pesquisar/pesquisar';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'ca909bc2',
  },
  'push': {
    'sender_id': '111826117587',
    'pluginConfig': {
      'ios': {
        'badge': true,
        'sound': true
      },
      'android': {
        'iconColor': '#343434'
      }
    }
  }
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SinglepostPage,
    CategoriasPage,
    PesquisarPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    FeedPageModule,
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SinglepostPage,
    CategoriasPage,
    PesquisarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieProvider
  ]
})
export class AppModule {}
