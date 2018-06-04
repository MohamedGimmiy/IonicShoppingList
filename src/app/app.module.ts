import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import {AngularFireModule}  from 'angularfire2';
import {AngularFireDatabase} from 'angularfire2/database';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';

import { FIREBASE_CONFIG } from './firebase.credientials';
import { shoppingListService } from '../services/shoppping-List/shopping-List.service';
import { ToastService } from '../services/Toast/toast.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    shoppingListService,  // adding an Injectable service
    ToastService,
    AngularFireDatabase   
  ]
})
export class AppModule {}
