import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsListComponent } from './components/card-list/cards-list.component';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [CardsListComponent, HeaderComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [CardsListComponent, HeaderComponent]
})
export class SharedModule { }
