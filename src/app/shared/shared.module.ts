import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsListComponent } from './components/card-list/cards-list.component';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './components/header/header.component';
import { EditingFooterComponent } from './components/editing-footer/editing-footer.component';
import { InputHintTextComponent } from './components/input-hint-text/input-hint-text.component';

const sharedComponents = [
  CardsListComponent,
  HeaderComponent,
  EditingFooterComponent,
  InputHintTextComponent,
];

@NgModule({
  declarations: sharedComponents,
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: sharedComponents
})
export class SharedModule { }
