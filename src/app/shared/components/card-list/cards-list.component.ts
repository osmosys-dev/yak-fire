import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss'],
})
export class CardsListComponent implements OnInit {

  @Input()
  collection: any;
  @Input()
  headerTitle: string;
  @Input()
  noCardTitle: string;
  @Input()
  noCardSubtitle: string;
  @Input()
  noCardIconColor = 'success';
  @Input()
  noCardIconName = 'language-outline';

  constructor() { }

  ngOnInit() {}

}
