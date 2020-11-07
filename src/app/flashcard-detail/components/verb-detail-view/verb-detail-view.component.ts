import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'verb-detail-view',
  templateUrl: './verb-detail-view.component.html',
  styleUrls: ['./verb-detail-view.component.scss'],
})
export class VerbDetailViewComponent implements OnInit {
  tense = 'present';
  present = [
    'Ja jem',
    'Ty jesz',
    'On/Ona/Ono je',
    'My jemy',
    'Wy jecie',
    'Oni/One jedzą'
  ];
  past = [
    'Ja jadłem / jadłam',
    'Ty jadłeś / jadłaś',
    'On jadł', 'Ona jadła',
    'My jedliśmy / jadłyśmy',
    'Wy jedliście / jadłyście',
    'Oni jedli',
    'One jadły'
  ];
  future = [
    'Ja będę jadł / jadła',
    'Ty będziesz jadł / jadła',
    'On będzie jadł',
    'Ona będzie jadła',
    'My będziemy jedli / jadły',
    'Wy będziecie jedli / jadły',
    'Oni będą jedli',
    'One będą jadły'
  ];
  // present = [];
  // past = [];
  // future = [];

  presentSentence = 'Jemy teraz śliwki.';
  pastSentence = 'Wczoraj jadłem słodkie ziemniaki.';
  futureSentence = 'Ty bedziesz jadła to danie jutro ?';

  constructor() { }

  ngOnInit() {}

  timeIndication(){
    switch (this.tense) {
      case 'past':
        return 'past';
      case 'future':
        return 'future';
      default:
        return 'present';
    }
  }

  tenseSentence(){
    switch (this.tense) {
      case 'past':
        return this.pastSentence;
      case 'future':
        return this.futureSentence;
      default:
        return this.presentSentence;
    }
  }

}
