import { Injectable } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AnimationsService {

  constructor(private animationController: AnimationController) { }

  toastEnterAnim(): Animation{
    return this.animationController.create('toastAnim')
    .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
    .fromTo('opacity', '1', '0.2')
    .duration(1500);
  }
}
