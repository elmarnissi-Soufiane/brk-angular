import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataForChartLineComponent } from './data-for-chart-line.component';

describe('DataForChartLineComponent', () => {
  let component: DataForChartLineComponent;
  let fixture: ComponentFixture<DataForChartLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataForChartLineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataForChartLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
