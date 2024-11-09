import { AfterViewInit, Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements AfterViewInit  {
  newChart!: Chart; // Specify the type and use definite assignment

  constructor() { }


  ngAfterViewInit(): void {
    this.initializeChart(); // Ensure the chart is initialized after the view is rendered
  }


  initializeChart(): void {
    this.newChart = new Chart('newCanvas', {
      type: 'bar',
      data: {
        labels: ['Station Name Dummy 1', 'Station Name Dummy 1','Station Name Dummy 1',
          'Station Name Dummy 1','Station Name Dummy 1'],
        datasets: [{
          label: 'Employee Status',
          data: [100,250,200,270,150],
          backgroundColor: ['#FF7F5C', '#FF7F5C'],
          borderColor: ['#FF7F5C', '#FF7F5C'],
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'top'
          },
          tooltip: {
            enabled: true
          }
        },
        scales: {
          x: {
            beginAtZero: true
          },
          y: {
            beginAtZero: true
          }
        },
        elements: {
          line: {
            borderWidth: 3
          }
        }
      }
    });
  }
}
