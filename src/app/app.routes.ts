import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { LibrarianComponent } from './librarian/librarian.component';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
    // { path: '', component: AppComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'librarian', component: LibrarianComponent },
    { path: '', component: HomePageComponent },
];
