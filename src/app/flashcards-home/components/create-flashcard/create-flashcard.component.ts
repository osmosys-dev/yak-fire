import {  Component, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';
import { ControllersService } from 'src/app/services/controllers.service';



@Component({
  selector: 'app-create-flashcard',
  templateUrl: './create-flashcard.component.html',
  styleUrls: ['./create-flashcard.component.scss'],
})
export class CreateFlashcardComponent implements OnInit {

  type = 'CONVERSATION';

  constructor(private controller: ControllersService) { }

  ngOnInit() {
  }

  closeModal(){
    this.controller.modal.dismiss();
  }

  onChange(selectedValue: string){
    this.type = selectedValue;
  }

  async presentSaveToast(){

    const toast = await this.controller.toast.create({
      message: 'Flashcard has been saved.',
      position: 'bottom',
      color: 'success',
      duration: 2000

    });
    toast.present();
  }

    saveFlashcard(){
      this.presentSaveToast();
      console.log('[Create Flashcard] Save flashcard');
  }

}
