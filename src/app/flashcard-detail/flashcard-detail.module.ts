import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlashcardDetailPageRoutingModule } from './flashcard-detail-routing.module';

import { SharedModule } from '../shared/shared.module';

import { FlashcardDetailPage } from './flashcard-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlashcardDetailPageRoutingModule,
    SharedModule
  ],
  declarations: [FlashcardDetailPage]
})
export class FlashcardDetailPageModule {}
