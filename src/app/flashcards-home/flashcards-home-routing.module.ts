import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlashcardsHomePage } from './flashcards-home.page';

const routes: Routes = [
  {
    path: '',
    component: FlashcardsHomePage
  },
  {
    path: ':flashcardId',
    loadChildren: () => import('../flashcard-detail/flashcard-detail.module').then(m => m.FlashcardDetailPageModule)

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlashcardsHomePageRoutingModule {}
