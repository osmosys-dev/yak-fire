import { Component, OnInit } from '@angular/core';
import { ControllersService } from '../services/controllers.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private controller: ControllersService) { }

  ngOnInit() {}

  async showCreateAlert(){
    const alert = await this.controller.alert.create({
      message: 'Add a new language',
      inputs: [
        {
          name: 'language',
          type: 'text',
          placeholder: 'Language name'
        },
      ],
      buttons: [
        {
          text: 'Add',
          handler: () => this.presentSaveToast()
        }
      ]
    });
    await alert.present();
  }

  async presentSaveToast(){
    const toast = await this.controller.toast.create({
      message: 'Language has been successfully created.',
      position: 'bottom',
      color: 'success',
      duration: 2000,
      cssClass: 'app-toast',
    });
    await toast.present();
  }

}
