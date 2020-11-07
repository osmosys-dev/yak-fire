import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'create-verb',
  templateUrl: './create-verb.component.html',
  styleUrls: ['./create-verb.component.scss'],
})
export class CreateVerbComponent implements OnInit {

  tense = 'present';

  constructor() { }

  ngOnInit() {}

}
