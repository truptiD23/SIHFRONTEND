import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table'; // For MatTable
// import { MatButtonModule } from '@angular/material/button'; // For Material buttons
// import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-predictor',
  imports : [MatTableModule],
  templateUrl: './perdictor.component.html',
  styleUrls: ['./perdictor.component.css']
})
export class PredictorComponent {
  // Sample data
  predictions = [
    { userId: '123', platform: 'Instagram', prediction: 'Real' },
     { userId: '456', platform: 'Twitter', prediction: 'Fake' },
    { userId: '789', platform: 'Facebook', prediction: 'Real' },
  ];

  // Method to handle user actions
  handleAction(userId: string, action: string) {
    console.log(`${action} action performed for User ID: ${userId}`);
  }
}
