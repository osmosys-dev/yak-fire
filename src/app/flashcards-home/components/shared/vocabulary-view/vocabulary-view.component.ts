import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'vocabulary-view',
  templateUrl: './vocabulary-view.component.html',
  styleUrls: ['./vocabulary-view.component.scss'],
})
export class VocabularyViewComponent implements OnInit {

  @Input()
  wordValue: string;
  @Input()
  translatedValue: string;
  @Input()
  pluralValue: string;
  @Input()
  sentenceValue: string;
  @Input()
  synonymsValue: string;
  @Input()
  confidenceValue: boolean;
  @Input()
  notesValue: string;

  constructor() { }

  ngOnInit() {}

}
