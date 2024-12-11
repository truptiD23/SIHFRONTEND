import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-dashbord-ui',
  imports: [BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule],
  standalone: true,
  templateUrl: './dashbord-ui.component.html',
  styleUrl: './dashbord-ui.component.css'
})
export class DashbordUIComponent {
  
    email: string = 'johndeo2@gamil.com';
  }
  

