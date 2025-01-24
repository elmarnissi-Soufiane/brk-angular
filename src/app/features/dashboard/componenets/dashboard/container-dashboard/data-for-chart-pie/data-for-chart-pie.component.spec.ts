import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataForChartPieComponent } from './data-for-chart-pie.component';

describe('DataForChartPieComponent', () => {
  let component: DataForChartPieComponent;
  let fixture: ComponentFixture<DataForChartPieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataForChartPieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataForChartPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
