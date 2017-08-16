import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookEdititableComponent } from './book-editable.component';

describe('BookEdititableComponent', () => {
  let component: BookEdititableComponent;
  let fixture: ComponentFixture<BookEdititableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookEdititableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookEdititableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
