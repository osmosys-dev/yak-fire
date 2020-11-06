import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlashcardDetailPageRoutingModule } from './flashcard-detail-routing.module';

import { SharedModule } from '../shared/shared.module';

import { FlashcardDetailPage } from './flashcard-detail.page';
import { ConversationViewComponent } from './components/conversation-view/conversation-view.component';
import { VerbViewComponent } from './components/verb-view/verb-view.component';
import { VocabularyViewComponent } from './components/vocabulary-view/vocabulary-view.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlashcardDetailPageRoutingModule,
    SharedModule
  ],
  declarations: [FlashcardDetailPage, ConversationViewComponent, VerbViewComponent, VocabularyViewComponent]
})
export class FlashcardDetailPageModule {}
