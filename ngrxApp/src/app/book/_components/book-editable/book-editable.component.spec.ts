import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookEditableComponent } from './book-editable.component';

describe('BookEdititableComponent', () => {
  let component: BookEditableComponent;
  let fixture: ComponentFixture<BookEditableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookEditableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookEditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
