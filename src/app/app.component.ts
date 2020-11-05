import { Component, Inject, OnDestroy, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DOCUMENT } from '@angular/common';
import {  Observable, of } from 'rxjs';
import {  map } from 'rxjs/operators';
import { LocalStorageService } from './services/localStorage.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  private isDark: boolean;
  public theme$: Observable<boolean>;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    @Inject(DOCUMENT) private document: Document,
    private localStorageService: LocalStorageService
  ) {
    this.localStorageService.getThemeValue()
    .then( value => {
      this.isDark = value;
      this.theme$ = of(this.isDark);
      this.theme$.subscribe();
   }
   );
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    this.applyColorSchemeSystemWide();
    this.localStorageService.getThemeValue().then((value) => {
      this.document.body.classList.toggle('dark', value);
    });
  }

  applyColorSchemeSystemWide(){
    const colorScheme = window.matchMedia('(prefers-color-scheme: dark)');
    colorScheme.addEventListener('change', mediaQuery => {
      this.theme$ = of(mediaQuery.matches);
      this.theme$.pipe(
        map(value => this.localStorageService.setThemeValue(value).then(() => {
          this.document.body.classList.toggle('dark', value);
        })),
      ).subscribe();
    });
  }

  toggleTheme(){
    this.isDark = !this.isDark;
    this.theme$ = of(this.isDark);
    this.theme$.pipe(
      map(value => this.localStorageService.setThemeValue(value).then(() => {
        this.document.body.classList.toggle('dark', value);
      })),
    ).subscribe();
  }
}
