import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

const {Storage} = Plugins;

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  private async setDarkModeValue(mode: boolean){
    await Storage.set({
      key: 'isDark',
      value: JSON.stringify(mode)
    });
    this.document.body.classList.toggle('dark', mode);
  }

  private async getDarkModeValue(): Promise<boolean>{
    const returnedValue = await Storage.get({key: 'isDark'});
    return JSON.parse(returnedValue.value);
  }

  checkColorSchemeSystemWide(mode: boolean){
    const colorScheme = window.matchMedia('(prefers-color-scheme: dark)');
    colorScheme.addEventListener('change', mediaQuery => {
     mode = mediaQuery.matches;
     this.setDarkModeValue(mode);
    });

  }

  setTheme(mode: boolean){
    this.setDarkModeValue(mode);
  }

  getTheme(){
    this.getDarkModeValue().then((value) => {
      this.document.body.classList.toggle('dark', value);
    });
  }


}
