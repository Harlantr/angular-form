import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextMultiplierComponent } from './text-multiplier.component';

describe('TextMultiplierComponent', () => {
  let component: TextMultiplierComponent;
  let fixture: ComponentFixture<TextMultiplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextMultiplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextMultiplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
