import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../services/book-service/book-service.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

interface Book {
  id: number;
  title: string;
  author: string;
  available: boolean;
}

@Component({
  selector: 'app-librarian',
  imports: [ReactiveFormsModule],
  templateUrl: './librarian.component.html',
  styleUrl: './librarian.component.scss'
})
export class LibrarianComponent implements OnInit {
  BookForm = new FormGroup({
    title: new FormControl('', { nonNullable: true }),
    author: new FormControl('', { nonNullable: true }),
    available: new FormControl(true, { nonNullable: true })
  });


  constructor(private book: BookServiceService, private router: Router) { }

  books: Book[] = [];

  ngOnInit(): void {
    this.book.getBooks().subscribe((val) => {
      this.books = val;
    })
  }
  addBook() {
    if (this.BookForm.valid) {
      this.book.addBook(this.BookForm.value).subscribe({
        next: (newBook: Book) => {
          this.books.push(newBook);
          this.BookForm.reset({ title: '', author: '', available: true });
        }
      });
    }
  }



  logout() {
    localStorage.clear();
    this.router.navigate(['']);
  }
}
