import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsForPieComponent } from './options-for-pie.component';

describe('OptionsForPieComponent', () => {
  let component: OptionsForPieComponent;
  let fixture: ComponentFixture<OptionsForPieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionsForPieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionsForPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
