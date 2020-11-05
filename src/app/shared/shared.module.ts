import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsListComponent } from './components/card-list/cards-list.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [CardsListComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [CardsListComponent]
})
export class SharedModule { }
