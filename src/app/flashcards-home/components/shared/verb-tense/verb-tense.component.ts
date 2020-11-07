import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'verb-tense',
  templateUrl: './verb-tense.component.html',
  styleUrls: ['./verb-tense.component.scss'],
})
export class VerbTenseComponent implements OnInit {

  @Input()
  tense: string;
  @Input()
  sentenceValue: string;
  @Input()
  tenseValue: string;

  constructor() { }

  ngOnInit() {}

}
