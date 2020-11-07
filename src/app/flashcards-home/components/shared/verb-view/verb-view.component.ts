import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'verb-view',
  templateUrl: './verb-view.component.html',
  styleUrls: ['./verb-view.component.scss'],
})
export class VerbViewComponent implements OnInit {

  public tense = 'present';

  @Input()
  verbValue: string;
  @Input()
  translatedValue: string;
  @Input()
  confidenceValue: boolean;
  @Input()
  notesValue: string;
  @Input()
  presentTenseValue: string;
  @Input()
  presentSentenceValue: string;
  @Input()
  pastTenseValue: string;
  @Input()
  pastSentenceValue: string;
  @Input()
  futureTenseValue: string;
  @Input()
  futureSentenceValue: string;

  constructor() { }

  ngOnInit() {}

}
