import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoCourtierComponent } from './logo-courtier.component';

describe('LogoCourtierComponent', () => {
  let component: LogoCourtierComponent;
  let fixture: ComponentFixture<LogoCourtierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoCourtierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoCourtierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
