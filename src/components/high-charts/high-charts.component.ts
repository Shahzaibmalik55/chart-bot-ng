import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'high-charts',
  templateUrl: './high-charts.component.html',
  styleUrls: ['./high-charts.component.scss'],
})
export class HighChartsComponent implements OnInit {
  @Input() data: any[] = [];
  @Input() categories: string[] = [];
  @Input() chartTitle = '';

  Highcharts: typeof Highcharts = Highcharts; // required

  chartTypes: any[] = [
    {
      title: 'Area',
      value: 'area',
    },
    {
      title: 'Area spline',
      value: 'areaspline',
    },
    {
      title: 'Bar',
      value: 'bar',
    },
    {
      title: 'Line',
      value: 'line',
    },
    {
      title: 'Pie',
      value: 'pie',
    },
  ];

  selectedChartType: any;

  chartOptions: Highcharts.Options = {};

  constructor() {
    this.selectedChartType = {
      title: 'Bar',
      value: 'bar',
    };
  }

  onChartTypeChange = (event: any) => {
    this.chartOptions = {
      title: this.chartOptions.title,
      xAxis: this.chartOptions.xAxis,
      series: [
        {
          type: event.value.value,
          data: this.data,
        },
      ],
    };
  };

  ngOnInit(): void {
    this.chartOptions = {
      xAxis: {
        categories: this.categories,
      },
      title: {
        text: this.chartTitle,
      },
      series: [
        {
          type: this.selectedChartType.value,
          data: this.data,
        },
      ],
    };
  }
}
