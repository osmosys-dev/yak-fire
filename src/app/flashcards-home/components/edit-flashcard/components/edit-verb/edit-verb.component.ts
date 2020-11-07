import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'edit-verb',
  templateUrl: './edit-verb.component.html',
  styleUrls: ['./edit-verb.component.scss'],
})
export class EditVerbComponent implements OnInit {

  tense = 'present';

  constructor() { }

  ngOnInit() {}

}
