import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../services/book-service/book-service.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, filter } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { StatusPipe } from '../status.pipe';

interface Book {
  id: number;
  title: string;
  author: string;
  available: boolean;
}

@Component({
  selector: 'app-dashboard',
  // standalone: true,
  imports: [ReactiveFormsModule, StatusPipe],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  searchText = new FormControl('');
  books: Book[] = [];

  constructor(private book: BookServiceService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    // Initial fetch
    this.book.getBooks().subscribe({
      next: (val: Book[]) => {
        this.books = val;
      },
      error: (err) => {
        console.error('Failed to load books:', err);
      }
    });

    // Search input listener
    this.searchText.valueChanges.pipe(
      debounceTime(400),
      // filter(val => val && val.trim() !== '')
    ).subscribe(value => {
      this.http.get<Book[]>(`http://localhost:3000/api/books?title_like=${value}`).subscribe({
        next: (books) => {
          this.books = books;
        },
        error: (err) => {
          console.error('Search failed:', err);
        }
      });
    });
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['']);
  }
}
