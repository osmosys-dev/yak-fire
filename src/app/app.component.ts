import { Component, Inject, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Plugins } from '@capacitor/core';
import { DOCUMENT } from '@angular/common';

const {Storage} = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  public isDarkMode: boolean;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    @Inject(DOCUMENT) private document: Document,
  ) {
    this.getDarkModeValue().then((value) => {
      this.isDarkMode = value;
    });
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    this.checkColorSchemeSystemWide();
    this.getDarkModeValue().then((value) => {
      this.document.body.classList.toggle('dark', value);
    });
  }

  checkColorSchemeSystemWide(){
    const colorScheme = window.matchMedia('(prefers-color-scheme: dark)');
    colorScheme.addEventListener('change', mediaQuery => {
      this.isDarkMode = mediaQuery.matches;
      this.setDarkModeValue(this.isDarkMode);
    });
  }

  toggleTheme(){
    this.isDarkMode = !this.isDarkMode;
    this.setDarkModeValue(this.isDarkMode);
  }

  async setDarkModeValue(mode: boolean){
    await Storage.set({
      key: 'isDarkMode',
      value: JSON.stringify(mode)
    });
    this.document.body.classList.toggle('dark', mode);
  }

  async getDarkModeValue(): Promise<boolean>{
    const returnedValue = await Storage.get({key: 'isDarkMode'});
    return JSON.parse(returnedValue.value);
  }
}
