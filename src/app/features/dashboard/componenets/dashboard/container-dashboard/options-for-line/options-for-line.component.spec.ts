import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsForLineComponent } from './options-for-line.component';

describe('OptionsForLineComponent', () => {
  let component: OptionsForLineComponent;
  let fixture: ComponentFixture<OptionsForLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionsForLineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionsForLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
