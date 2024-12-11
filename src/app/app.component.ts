import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { MatTableModule } from '@angular/material/table'; // For MatTable
import { MatButtonModule } from '@angular/material/button'; // For Material buttons
import { CommonModule } from '@angular/common'; // Needed for basic Angular directives like *ngFor 
import { PredictorComponent } from './perdictor/perdictor.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, CommonModule , PredictorComponent], // Import this to enable basic Angular directives
  
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
    const ctx = document.getElementById('barChart') as HTMLCanvasElement;
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
            borderWidth: 1
          },
          {
            label: 'Fake Accounts',
            data: [10, 5],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  rejectRequest(userId: string): void {
    console.log('Rejected request for user:', userId);
  }

  addToPredictor(userId: string): void {
    console.log('Added to predictor:', userId);
  }
}
