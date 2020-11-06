import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../shared/shared.module';

import { FlashcardsHomePageRoutingModule } from './flashcards-home-routing.module';

import { FlashcardsHomePage } from './flashcards-home.page';
import { FlashcardComponent } from './components/flashcard/flashcard.component';
import { CreateFlashcardComponent } from './components/create-flashcard/create-flashcard.component';
import { EditFlashcardComponent } from './components/edit-flashcard/edit-flashcard.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlashcardsHomePageRoutingModule,
    SharedModule
  ],
  declarations: [FlashcardsHomePage, FlashcardComponent, CreateFlashcardComponent, EditFlashcardComponent]
})
export class FlashcardsHomePageModule {}
