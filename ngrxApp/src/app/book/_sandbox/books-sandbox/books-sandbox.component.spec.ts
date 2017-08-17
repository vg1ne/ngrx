import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksSandboxComponent } from './books-sandbox.component';

describe('BooksSandboxComponent', () => {
  let component: BooksSandboxComponent;
  let fixture: ComponentFixture<BooksSandboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksSandboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksSandboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
