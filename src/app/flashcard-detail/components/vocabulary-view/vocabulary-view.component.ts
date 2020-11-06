import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vocabulary-view',
  templateUrl: './vocabulary-view.component.html',
  styleUrls: ['./vocabulary-view.component.scss'],
})
export class VocabularyViewComponent implements OnInit {

    synonyms = ['Ramka', 'Kadr'];
    // synonyms = [];

  constructor() { }

  ngOnInit() {}

}
