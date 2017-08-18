import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookBasketItemComponent } from './book-basket-item.component';

describe('BookBasketItemComponent', () => {
  let component: BookBasketItemComponent;
  let fixture: ComponentFixture<BookBasketItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookBasketItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookBasketItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
