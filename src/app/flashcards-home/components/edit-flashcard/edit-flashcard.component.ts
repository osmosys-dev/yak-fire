import { Component, OnInit } from '@angular/core';
import { ControllersService } from 'src/app/services/controllers.service';

@Component({
  selector: 'app-edit-flashcard',
  templateUrl: './edit-flashcard.component.html',
  styleUrls: ['./edit-flashcard.component.scss'],
})
export class EditFlashcardComponent implements OnInit {

  type = 'CONVERSATION';

  constructor(private controller: ControllersService) { }

  ngOnInit() {}

  closeModal(){
    this.controller.modal.dismiss();
  }

  async presentDeleteAlert(){
    const alert = await this.controller.alert.create({
      message: 'Are you sure you want to delete this flashcard?',
      buttons: [
        {
          text: 'Yes',
          handler: () => this.presentDeleteToast()
        },
         'No']
    });

    await alert.present();
  }

  async presentDeleteToast(){
    const toast = await this.controller.toast.create({
      message: 'Flashcard has been sucessfully deleted',
      duration: 2000,
      cssClass: 'app-toast',
      color: 'danger',
      position: 'bottom'
    });
    await toast.present();
    await toast.onDidDismiss().then(() => this.closeModal());
  }

  onChange(selectedValue: string){
    this.type = selectedValue;
  }

  deleteFlashcard(){
    this.presentDeleteAlert();
    console.log('[Edit flashcard] Delete Flashcard');
  }
}
