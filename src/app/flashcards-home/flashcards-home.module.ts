import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlashcardsHomePageRoutingModule } from './flashcards-home-routing.module';

import { FlashcardsHomePage } from './flashcards-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlashcardsHomePageRoutingModule
  ],
  declarations: [FlashcardsHomePage]
})
export class FlashcardsHomePageModule {}
