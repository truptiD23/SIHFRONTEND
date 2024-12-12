import { Component, OnInit } from '@angular/core';
import * as postData from '../../../post.json';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router , RouterLink } from '@angular/router';

@Component({
  selector: 'app-post',
  standalone:true,
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  imports:[CommonModule , RouterLink]
})
export class PostComponent implements OnInit {
  posts: any[] = [];
  constructor(private http: HttpClient, private router: Router) {}


  ngOnInit(): void {
    this.posts = (postData as any).default;
    console.log(this.posts,"this is post data")
  }

   /**
   * Handles the rejection of a request.
   * @param index - The index of the post to be removed from the list.
   */
   rejectRequest(index: number): void {
    this.posts.splice(index, 1);
  }

  /**
   * Handles adding a request to the predictor.
   * @param post - The post data to be sent to the backend.
   */
  addToPredictor(post: any): void {
    const apiUrl = 'http://localhost:3000/predictor'; // Replace with your actual API URL
    this.http.post(apiUrl, post).subscribe(
      (response) => {
        console.log('Data successfully sent to predictor:', response);
        // Redirect to post detail page (modify the path if necessary)
        this.router.navigate(['/post-detail'], { queryParams: { id: post.keyword } });
      },
      (error) => {
        console.error('Error sending data to predictor:', error);
      }
    );
  }
}
