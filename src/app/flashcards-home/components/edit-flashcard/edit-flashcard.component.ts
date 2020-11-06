import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-edit-flashcard',
  templateUrl: './edit-flashcard.component.html',
  styleUrls: ['./edit-flashcard.component.scss'],
})
export class EditFlashcardComponent implements OnInit {

  textLabel: string;
  type = 'CONVERSATION';

  tense = 'present';

  constructor(private modalController: ModalController, private alertController: AlertController) { }

  ngOnInit() {
    this.switchTextLabel(this.type);
  }

  closeModal(){
    this.modalController.dismiss();
  }

  async presentAlert(){
    const alert = await this.alertController.create({
      message: 'Are you sure you want to delete this flashcard?',
      buttons: ['Yes', 'No']
    });

    await alert.present();
  }

  onChange(selectedValue: string){
    this.type = selectedValue;
    this.switchTextLabel(selectedValue);
  }

  switchTextLabel(key: string){
    switch (key) {
      case 'VERB':
        this.textLabel = 'Verb';
        break;
      case 'VOCABULARY':
        this.textLabel = 'Word';
        break;
      default:
        this.textLabel = 'Sentence';
    }
  }

  // timeIndication(){
  //   switch (this.tense) {
  //     case 'past':
  //       return 'past';
  //     case 'future':
  //       return 'future';
  //     default:
  //       return 'present';
  //   }
  // }

}
