import { Component } from '@angular/core';
import { DataForChartLineComponent } from './data-for-chart-line/data-for-chart-line.component';
import { DataForChartPieComponent } from './data-for-chart-pie/data-for-chart-pie.component';
import { OptionsForPieComponent } from './options-for-pie/options-for-pie.component';
import { OptionsForLineComponent } from './options-for-line/options-for-line.component';

@Component({
  selector: 'app-container-dashboard',
  standalone: true,
  imports: [
    DataForChartLineComponent,
    DataForChartPieComponent,
    OptionsForPieComponent,
    OptionsForLineComponent
  ],
  templateUrl: './container-dashboard.component.html',
  styleUrl: './container-dashboard.component.css'
})
export class ContainerDashboardComponent {

}
