import { Component, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js'; // Correctly import Chart.js

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'] // Corrected the typo from styleUrl to styleUrls
})
export class HomeComponent implements AfterViewInit {
  allDataNewChart!: Chart;

  constructor() {}

  ngAfterViewInit(): void {
    this.allDataInfo(); // Ensure the chart is initialized after the view is rendered
  }

  allDataInfo() {
    this.allDataNewChart = new Chart('allData', { // 'allData' is the ID from the canvas element
      type: 'radar',
      data: {
        labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g','h','i','j'],
        datasets: [
          {
            label: 'Employee Status',
            data: [20, 18, 36, 40, 53, 55, 68,50,40,40],
            fill: true,
            backgroundColor: '#009ACF33',
            borderColor: '#009ACF',
            pointBackgroundColor: '#ef9b28',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#ef9b28'
          },
          {
            label: 'Tasks Status',
            data: [55, 60, 40, 33, 55, 27, 50,60,65,45],
            fill: true,
            backgroundColor: '#00CBC033',
            borderColor: '#00CBC0',
            pointBackgroundColor: '#0e3826',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#0e3826'
          }
        ]
      },
    });
  }
}
