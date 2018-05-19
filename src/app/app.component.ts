import {Component, OnInit} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {HomePage} from '../pages/home/home';


declare var cordova: any;

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit {
  rootPage: any = HomePage;


  constructor(private platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  ngOnInit(): void {

    this.platform.ready().then(
      () => {
        console.log("MyApp::constructor platform.ready");
        cordova.plugins.baidumap_location.getCurrentPosition(function (result) {
          alert(JSON.stringify(result, null, 4))
          console.log("================")
          console.log(JSON.stringify(result, null, 4));
        }, function (error) {

        });
      }
    );


  }
}

