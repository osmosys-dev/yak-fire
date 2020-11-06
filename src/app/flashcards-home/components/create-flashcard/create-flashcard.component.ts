import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-flashcard',
  templateUrl: './create-flashcard.component.html',
  styleUrls: ['./create-flashcard.component.scss'],
})
export class CreateFlashcardComponent implements OnInit {

  textLabel: string;
  category = 'conversation';

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    this.switchTextLabel(this.category);
  }

  closeModal(){
    this.modalController.dismiss();
  }

  onChange(selectedValue: string){
    this.category = selectedValue;
    this.switchTextLabel(selectedValue);
  }

  switchTextLabel(key: string){
    switch (key) {
      case 'conversation':
        this.textLabel = 'Sentence';
        break;
      case 'vocabulary':
        this.textLabel = 'Word';
        break;
      case 'verb':
        this.textLabel = 'Verb';
        break;
    }
  }

}
