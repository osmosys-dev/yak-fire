import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlashcardDetailPageRoutingModule } from './flashcard-detail-routing.module';

import { SharedModule } from '../shared/shared.module';

import { FlashcardDetailPage } from './flashcard-detail.page';
import { ConversationDetailViewComponent } from './components/conversation-detail-view/conversation-detail-view.component';
import { VerbDetailViewComponent } from './components/verb-detail-view/verb-detail-view.component';
import { VocabularyDetailViewComponent } from './components/vocabulary-detail-view/vocabulary-detail-view.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlashcardDetailPageRoutingModule,
    SharedModule
  ],
  declarations: [FlashcardDetailPage, ConversationDetailViewComponent, VerbDetailViewComponent, VocabularyDetailViewComponent]
})
export class FlashcardDetailPageModule {}
