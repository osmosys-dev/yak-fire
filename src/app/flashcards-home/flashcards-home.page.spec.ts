import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FlashcardsHomePage } from './flashcards-home.page';

describe('FlashcardsHomePage', () => {
  let component: FlashcardsHomePage;
  let fixture: ComponentFixture<FlashcardsHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashcardsHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FlashcardsHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
