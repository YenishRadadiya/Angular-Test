import { Component } from '@angular/core';
import { AuthServiceService } from '../services/auth-service/auth-service.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  constructor(private authService: AuthServiceService) { }
  loginAsLibrarian() {
    this.authService.loginLibrarian()

  }

  loginAsUser() {
    this.authService.loginUser();
  }
}
