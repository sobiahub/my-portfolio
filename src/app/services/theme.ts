import {
  Injectable,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {

  private platformId = inject(PLATFORM_ID);
  private themeKey = 'theme';

  private get isBrowser() {
    return isPlatformBrowser(this.platformId);
  }

  loadTheme() {

    if (!this.isBrowser) return;

    const savedTheme = localStorage.getItem(this.themeKey);

    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  toggleTheme() {

    if (!this.isBrowser) return;

    const html = document.documentElement;

    const isDark = html.classList.toggle('dark');

    localStorage.setItem(
      this.themeKey,
      isDark ? 'dark' : 'light'
    );
  }

  isDarkMode(): boolean {

    if (!this.isBrowser) return false;

    return document.documentElement.classList.contains('dark');
  }

}