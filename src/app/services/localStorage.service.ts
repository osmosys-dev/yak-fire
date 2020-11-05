import {  Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';


const {Storage} = Plugins;

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

   async setThemeValue(mode: boolean){
    await Storage.set({
      key: 'isDark',
      value: JSON.stringify(mode)
    });
  }

   async getThemeValue(): Promise<boolean>{
    const returnedValue = await Storage.get({key: 'isDark'});
    return JSON.parse(returnedValue.value);
  }
}
