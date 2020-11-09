import { Injectable } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ControllersService {

  constructor(
    public toast: ToastController,
    public modal: ModalController,
    public alert: AlertController) { }
}
