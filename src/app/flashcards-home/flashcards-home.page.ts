import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreateFlashcardComponent } from './components/create-flashcard/create-flashcard.component';

@Component({
  selector: 'app-flashcards-home',
  templateUrl: './flashcards-home.page.html',
  styleUrls: ['./flashcards-home.page.scss'],
})
export class FlashcardsHomePage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async showCreateModal(){
    const modal = await this.modalController.create({
      component: CreateFlashcardComponent
    });
    await modal.present();
  }

}
