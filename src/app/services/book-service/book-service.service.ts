import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


interface Book {
  id: number;
  title: string;
  author: string;
  available: boolean
}


interface AddBookType {
  // id: number;
  title: string;
  author: string;
  isAvailable: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private http: HttpClient) { }



  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:3000/api/books');
  }

  addBook(book: Partial<Book>): Observable<Book> {
    const token = localStorage.getItem('JWT token'); // or sessionStorage
    const headers = {
      Authorization: `Bearer ${token}`
    };

    return this.http.post<Book>('http://localhost:3000/api/books', book, { headers });
  }





}
