import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoProfileCourtierComponent } from './logo-profile-courtier.component';

describe('LogoProfileCourtierComponent', () => {
  let component: LogoProfileCourtierComponent;
  let fixture: ComponentFixture<LogoProfileCourtierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoProfileCourtierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoProfileCourtierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
