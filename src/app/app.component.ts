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

  public manualMode = true;
  public systemAutoMode: boolean;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
  ) {
    this.initializeApp();
  }

  ngOnInit() {
    this.renderer.setAttribute(this.document.body, 'class', 'dark');
    this.checkColorSchemeSystemWide();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  checkColorSchemeSystemWide(){
    const colorScheme = window.matchMedia('(prefers-color-scheme: dark)');
    colorScheme.addEventListener('change', mediaQuery => {
      this.systemAutoMode = mediaQuery.matches;
      this.document.body.classList.toggle('dark', this.systemAutoMode);
    });
  }
  toggleTheme(){
    this.manualMode = !this.manualMode;
    this.document.body.classList.toggle('dark', this.manualMode);
  }
}
