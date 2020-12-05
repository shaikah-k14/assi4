import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddpetPage } from './addpet.page';

describe('AddpetPage', () => {
  let component: AddpetPage;
  let fixture: ComponentFixture<AddpetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddpetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
