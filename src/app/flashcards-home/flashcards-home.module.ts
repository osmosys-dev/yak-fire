import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../shared/shared.module';

import { FlashcardsHomePageRoutingModule } from './flashcards-home-routing.module';

import { FlashcardsHomePage } from './flashcards-home.page';
import { FlashcardComponent } from './components/flashcard/flashcard.component';

import { CreateFlashcardComponent } from './components/create-flashcard/create-flashcard.component';
import { CreateConversationComponent } from './components/create-flashcard/components/create-conversation/create-conversation.component';
import { CreateVerbComponent } from './components/create-flashcard/components/create-verb/create-verb.component';
import { CreateVocabularyComponent } from './components/create-flashcard/components/create-vocabulary/create-vocabulary.component';

import { EditFlashcardComponent } from './components/edit-flashcard/edit-flashcard.component';
import { EditConversationComponent } from './components/edit-flashcard/components/edit-conversation/edit-conversation.component';
import { EditVerbComponent } from './components/edit-flashcard/components/edit-verb/edit-verb.component';
import { EditVocabularyComponent } from './components/edit-flashcard/components/edit-vocabulary/edit-vocabulary.component';

import { ConversationViewComponent } from './components/shared/conversation-view/conversation-view.component';
import { VerbViewComponent } from './components/shared/verb-view/verb-view.component';
import { VocabularyViewComponent } from './components/shared/vocabulary-view/vocabulary-view.component';

import { VerbTenseComponent } from './components/shared/verb-tense/verb-tense.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlashcardsHomePageRoutingModule,
    SharedModule
  ],
  declarations: [
    FlashcardsHomePage,
    FlashcardComponent,
    CreateFlashcardComponent,
    CreateConversationComponent,
    CreateVerbComponent,
    CreateVocabularyComponent,
    EditFlashcardComponent,
    EditConversationComponent,
    EditVerbComponent,
    EditVocabularyComponent,
    ConversationViewComponent,
    VerbViewComponent,
    VocabularyViewComponent,
    VerbTenseComponent
  ]
})
export class FlashcardsHomePageModule {}
