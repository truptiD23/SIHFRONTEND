import { Component, OnInit } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table'; // For MatTable
import { MatButtonModule } from '@angular/material/button'; // For Material buttons
import { CommonModule } from '@angular/common'; // Needed for basic Angular directives like *ngFor 
import { BrowserModule } from '@angular/platform-browser';
import { PredictorComponent } from '../perdictor/perdictor.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashbord-ui',
  imports: [MatTableModule, MatButtonModule, CommonModule  , RouterLink , FormsModule], 
  standalone: true,
  templateUrl: './dashbord-ui.component.html',
  styleUrl: './dashbord-ui.component.css'
})
export class DashbordUIComponent implements OnInit {
  
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  dataSource = [
    { userId: '123', platform: 'Instagram' },
    { userId: '456', platform: 'Twitter' },
    { userId: '789', platform: 'Facebook' }
  ];

  // constructor(private apiservice: ApiService) {}
  ngOnInit(): void {}


  displayedColumns: string[] = ['userId', 'platform', 'actions'];
  searchQuery: string = ''; // For capturing the search input

  filteredData: any[] = [...this.dataSource]; // Initialize with all data

  onSearch(): void {
    if (this.searchQuery.trim() === '') {
      this.dataSource = []; // Clear results if search query is empty
      return;
    }

    // this.apiservice.searchUsers(this.searchQuery).subscribe(
    //   (data) => {
    //     this.dataSource = data;
    //   },
    //   (error) => {
    //     console.error('Error fetching data:', error);
    //   }
    // );
  }

  rejectRequest(userId: string): void {
    console.log('Rejected request for user:', userId);
  }

  addToPredictor(userId: string): void {
    console.log('Added to predictor:', userId);
  }
}
  

