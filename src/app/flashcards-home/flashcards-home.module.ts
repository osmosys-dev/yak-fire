import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlashcardsHomePageRoutingModule } from './flashcards-home-routing.module';

import { FlashcardsHomePage } from './flashcards-home.page';
import { CardsListComponent } from '../shared/components/card-list/cards-list.component';
import { FlashcardComponent } from './components/flashcard/flashcard.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlashcardsHomePageRoutingModule,
    SharedModule
  ],
  declarations: [FlashcardsHomePage, FlashcardComponent]
})
export class FlashcardsHomePageModule {}
