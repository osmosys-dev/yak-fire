import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vocabulary-detail-view',
  templateUrl: './vocabulary-detail-view.component.html',
  styleUrls: ['./vocabulary-detail-view.component.scss'],
})
export class VocabularyDetailViewComponent implements OnInit {

    synonyms = ['Ramka', 'Kadr'];
    // synonyms = [];

  constructor() { }

  ngOnInit() {}

}
