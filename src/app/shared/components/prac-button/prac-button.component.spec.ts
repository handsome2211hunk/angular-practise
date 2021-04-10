import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracButtonComponent } from './prac-button.component';

describe('PracButtonComponent', () => {
  let component: PracButtonComponent;
  let fixture: ComponentFixture<PracButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
