import { Component } from '@angular/core';
import { BookServiceService } from '../services/book-service/book-service.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(private book: BookServiceService) { }



}
