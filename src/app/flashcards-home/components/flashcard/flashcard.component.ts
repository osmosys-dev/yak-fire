import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EditFlashcardComponent } from '../edit-flashcard/edit-flashcard.component';

@Component({
  selector: 'flash-card',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.scss'],
})
export class FlashcardComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  async showEditModal(){
    const modal = await this.modalController.create({
      component: EditFlashcardComponent
    });
    await modal.present();
  }
}
