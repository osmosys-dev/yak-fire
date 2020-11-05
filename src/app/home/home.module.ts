import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { LanguageCardComponent } from './components/language-card/language-card.component';
import { CardsListComponent } from '../shared/components/card-list/cards-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, LanguageCardComponent, CardsListComponent]
})
export class HomePageModule {}
