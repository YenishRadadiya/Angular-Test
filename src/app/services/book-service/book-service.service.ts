import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


interface Book {
  id: number;
  title: string;
  author: string;
  available: false
}
@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private http: HttpClient) { }



  getBooks() {
    this.http.get('http://localhost:3000/api/books').subscribe((res) => {
      return res;
    })
  }


}
