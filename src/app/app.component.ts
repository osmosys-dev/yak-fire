import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  public isDarkMode = true;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    @Inject(DOCUMENT) private document: Document,
  ) {
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
    this.isDarkMode = JSON.parse(sessionStorage.getItem('isDarkMode'));
    this.document.body.classList.toggle('dark', this.isDarkMode);
  }

  checkColorSchemeSystemWide(){
    const colorScheme = window.matchMedia('(prefers-color-scheme: dark)');
    colorScheme.addEventListener('change', mediaQuery => {
      this.isDarkMode = mediaQuery.matches;
      this.processDarkMode(this.isDarkMode);
    });
  }

  toggleTheme(){
    this.isDarkMode = !this.isDarkMode;
    this.processDarkMode(this.isDarkMode);
  }

  processDarkMode(mode: boolean){
    sessionStorage.setItem('isDarkMode', JSON.stringify(mode));
    this.document.body.classList.toggle('dark', mode);
  }
}
