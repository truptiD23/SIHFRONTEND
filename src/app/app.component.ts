import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  RouterOutlet], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  dataSource = [
    { userId: '123', platform: 'Instagram' },
    { userId: '456', platform: 'Twitter' },
    { userId: '789', platform: 'Facebook' }
  ];

  displayedColumns: string[] = ['userId', 'platform', 'actions'];

  ngOnInit(): void {
    if (typeof document !== 'undefined') {
      const ctx = document.getElementById('barChart') as HTMLCanvasElement;
      if (ctx) {
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['R', 'F'],
            datasets: [
              {
                label: 'Real Accounts',
                data: [15, 10],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
              },
              {
                label: 'Fake Accounts',
                data: [10, 5],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      } else {
        console.error('Canvas element with id "barChart" not found');
      }
    }
  }
  

  rejectRequest(userId: string): void {
    console.log('Rejected request for user:', userId);
  }

  addToPredictor(userId: string): void {
    console.log('Added to predictor:', userId);
  }
}

