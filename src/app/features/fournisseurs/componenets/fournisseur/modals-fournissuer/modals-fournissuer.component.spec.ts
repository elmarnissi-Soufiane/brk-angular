import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalsFournissuerComponent } from './modals-fournissuer.component';

describe('ModalsFournissuerComponent', () => {
  let component: ModalsFournissuerComponent;
  let fixture: ComponentFixture<ModalsFournissuerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalsFournissuerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalsFournissuerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
