import {  Component, OnInit } from '@angular/core';
import { ControllersService } from 'src/app/services/controllers.service';



@Component({
  selector: 'app-create-flashcard',
  templateUrl: './create-flashcard.component.html',
  styleUrls: ['./create-flashcard.component.scss'],
})
export class CreateFlashcardComponent implements OnInit {

  type = 'CONVERSATION';

  constructor(private controller: ControllersService) { }

  ngOnInit() {}

  closeModal(){
    this.controller.modal.dismiss();
  }

  onChange(selectedValue: string){
    this.type = selectedValue;
  }

  async presentSaveToast(){
    const toast = await this.controller.toast.create({
      message: 'Flashcard has been successfully saved.',
      position: 'bottom',
      color: 'success',
      duration: 2000,
      cssClass: 'app-toast',
    });
    await toast.present();
    await toast.onDidDismiss().then(() => {
      this.closeModal();
    });
  }

    saveFlashcard(){
      this.presentSaveToast();
      console.log('[Create Flashcard] Save flashcard');
  }

}
