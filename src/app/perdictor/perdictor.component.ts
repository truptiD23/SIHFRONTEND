import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table'; // For MatTable
import { RouterLink } from '@angular/router';
// import { MatButtonModule } from '@angular/material/button'; // For Material buttons
// import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-predictor',
  imports : [MatTableModule , RouterLink],
  templateUrl: './perdictor.component.html',
  styleUrls: ['./perdictor.component.css']
})
export class PredictorComponent {
  // Sample data
  predictions = [
    { userId: '123', platform: 'Instagram', prediction: 'Real', accuracy: 85  },
    
  ];

  // Method to handle user actions
  handleAction(userId: string, action: string) {
    console.log(`${action} action performed for User ID: ${userId}`);
  }

  getAccuracyColor(accuracy: number): string {
    if (accuracy >= 80) {
      return 'green'; // High accuracy
    } else if (accuracy >= 50) {
      return 'orange'; // Moderate accuracy
    } else {
      return 'red'; // Low accuracy
    }
  }

  getAccuracyTooltip(accuracy: number): string {
    if (accuracy >= 80) {
      return 'Highly accurate prediction';
    } else if (accuracy >= 50) {
      return 'Moderately accurate prediction';
    } else {
      return 'Low accuracy prediction';
    }
  }
}
