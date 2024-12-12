import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  userId: string | null = null;
  userDetails: any = null;

  constructor(
    private route: ActivatedRoute,
    private apiservice: ApiService // Inject the service
  ) {}

  ngOnInit(): void {
    // Get the userId from the route parameters
    this.userId = this.route.snapshot.paramMap.get('userId');
    console.log("i am here");
    if (this.userId) {
      this.fetchUserDetails(this.userId);
    }
  }

  fetchUserDetails(userId: string): void {
    this.apiservice.getUserById(userId).subscribe(
      (data : any) => {
        this.userDetails = data;
      },
      (error: any) => {
        console.error('Error fetching user details:', error);
      }
    );
  }

  
}


