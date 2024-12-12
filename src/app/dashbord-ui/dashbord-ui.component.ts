import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table'; // For MatTable
import { MatButtonModule } from '@angular/material/button'; // For Material buttons
import { CommonModule } from '@angular/common'; // Needed for basic Angular directives like *ngFor 
import { FormsModule } from '@angular/forms';
import * as usersData from '../../../user.json';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashbord-ui',
  imports: [MatTableModule, MatButtonModule, CommonModule, FormsModule , RouterLink], 
  standalone: true,
  templateUrl: './dashbord-ui.component.html',
  styleUrls: ['./dashbord-ui.component.css']
})
export class DashbordUIComponent implements OnInit {
  users: any[] = [];
  searchQuery: string = ''; // For capturing the search input
  filteredUsers: any[] = []; // Initialize as an empty array

  displayedColumns: string[] = ['userId', 'platform', 'actions'];

  ngOnInit(): void {
    this.users = (usersData as any).default;
    this.filteredUsers = [...this.users]; // Initialize filteredUsers with all users
    console.log(this.users, "this is post data");
  }

  onSearch(): void {
    const query = this.searchQuery.trim().toLowerCase(); // Trim whitespace and convert to lowercase
    if (query === '') {
      this.filteredUsers = [...this.users]; // Reset to the full user list if the search query is empty
      return;
    }
  
    this.filteredUsers = this.users.filter(user =>
      user.username.toLowerCase().includes(query) // Modify this line if the property is different
    );
  }

  rejectRequest(username: string): void {
    console.log('Reject button clicked for:', username);
    const index = this.users.findIndex(user => user.username === username);
    if (index !== -1) {
      this.users.splice(index, 1);
      console.log(`Rejected request for user: ${username}`);
    } else {
      console.log(`User with username ${username} not found.`);
    }
  }
  
  addToPredictor(userId: string): void {
    console.log('Added to predictor:', userId);
  }
}
