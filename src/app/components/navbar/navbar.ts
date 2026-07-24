import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme';


@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class NavbarComponent {
  constructor(public theme: ThemeService) {}

  toggleTheme() {
    this.theme.toggleTheme();
  }
}
