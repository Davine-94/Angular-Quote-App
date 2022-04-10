import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteDetailsComponentComponent } from './quote-details-component.component';

describe('QuoteDetailsComponentComponent', () => {
  let component: QuoteDetailsComponentComponent;
  let fixture: ComponentFixture<QuoteDetailsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteDetailsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
