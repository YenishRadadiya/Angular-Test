import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

interface User {
  id: number;
  username: string;
  role: string;
  token: string
}
@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }

  loginUser() {
    this.http.post<User>('http://localhost:3000/api/login-user', null).subscribe((res) => {
      localStorage.setItem('JWT token', res.token)
    })
  }

  loginLibrarian() {
    this.http.post<User>('http://localhost:3000/api/login-librarian', null).subscribe((res) => {
      localStorage.setItem('JWT token', res.token)
    })
  }









}
