import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookBasketComponent } from './book-basket.component';

describe('BookBasketComponent', () => {
  let component: BookBasketComponent;
  let fixture: ComponentFixture<BookBasketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookBasketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
