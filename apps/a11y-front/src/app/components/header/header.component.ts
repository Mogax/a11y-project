import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';

@Component({
  selector: 'a11y-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    TranslateModule,
    LanguageSwitcherComponent,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  private router = inject(Router);
  authService = inject(AuthService);
  isMenuBurgerOpen = false;

  goToHome() {
    this.router.navigateByUrl('/');
  }

  goToContact() {
    this.router.navigateByUrl('/contact');
  }

  goToAbout() {
    this.router.navigateByUrl('/about');
  }

  goToRegister() {
    this.router.navigateByUrl('/register');
  }

  goToLogin() {
    this.router.navigateByUrl('/login');
  }

  goToNews() {
    this.router.navigateByUrl('/news');
  }

  goToList() {
    this.router.navigateByUrl('/lists');
  }

  logout() {
    this.authService.logout();
  }

  openMenu() {
    this.isMenuBurgerOpen = !this.isMenuBurgerOpen;
  }
}
