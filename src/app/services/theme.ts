import {
  Injectable,
  Inject,
  PLATFORM_ID
} from '@angular/core';

import {
  isPlatformBrowser
} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  isDark = true;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) {

    if (isPlatformBrowser(this.platformId)) {

      const savedTheme =
        localStorage.getItem('theme');

      if (savedTheme) {
        this.isDark = savedTheme === 'dark';
      }

      this.applyTheme();
    }
  }

  toggleTheme() {

    if (!isPlatformBrowser(this.platformId))
      return;

    this.isDark = !this.isDark;

    localStorage.setItem(
      'theme',
      this.isDark ? 'dark' : 'light'
    );

    this.applyTheme();
  }

  private applyTheme() {

    if (!isPlatformBrowser(this.platformId))
      return;

    if (this.isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

  }
}