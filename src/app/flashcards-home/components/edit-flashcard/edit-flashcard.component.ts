import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-edit-flashcard',
  templateUrl: './edit-flashcard.component.html',
  styleUrls: ['./edit-flashcard.component.scss'],
})
export class EditFlashcardComponent implements OnInit {

  type = 'CONVERSATION';


  constructor(private modalController: ModalController, private alertController: AlertController) { }

  ngOnInit() {
  }

  closeModal(){
    this.modalController.dismiss();
  }

  async presentDeleteAlert(){
    const alert = await this.alertController.create({
      message: 'Are you sure you want to delete this flashcard?',
      buttons: ['Yes', 'No']
    });

    await alert.present();
  }

  onChange(selectedValue: string){
    this.type = selectedValue;
  }
  deleteFlashcard(){
    this.presentDeleteAlert();
    console.log('[Edit flashcard] Delete Flashcard');
  }
}
