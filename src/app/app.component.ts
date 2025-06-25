import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthServiceService } from './services/auth-service/auth-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'digital-library';
  // constructor(private authService: AuthServiceService) { }
  loginAsLibrarian() {


  }


  loginAsUser() {

  }
}