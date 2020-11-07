import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-flashcard',
  templateUrl: './create-flashcard.component.html',
  styleUrls: ['./create-flashcard.component.scss'],
})
export class CreateFlashcardComponent implements OnInit {

  type = 'CONVERSATION';


  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  closeModal(){
    this.modalController.dismiss();
  }

  onChange(selectedValue: string){
    this.type = selectedValue;
  }

  saveFlashcard(){
    console.log('[Create Flashcard] Save flashcard');
  }

}
