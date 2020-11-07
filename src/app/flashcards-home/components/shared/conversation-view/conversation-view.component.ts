import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'conversation-view',
  templateUrl: './conversation-view.component.html',
  styleUrls: ['./conversation-view.component.scss'],
})
export class ConversationViewComponent implements OnInit {

  @Input()
  sentenceValue: string;
  @Input()
  translatedValue: string;
  @Input()
  confidenceValue: boolean;
  @Input()
  notesValue: string;

  constructor() { }

  ngOnInit() {}

}
