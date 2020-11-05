import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'flash-card',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.scss'],
})
export class FlashcardComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  showEditModal(){

    console.log('Flashcard component: [showEditModal()]');

  }
}
