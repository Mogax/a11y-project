import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'a11y-language-switcher',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss'],
})
export class LanguageSwitcherComponent {
  constructor(private translate: TranslateService) {}

  switchToFr() {
    const newLang = 'fr'
    this.translate.use(newLang);
  }

  switchToEn() {
    const newLang = 'en';
    this.translate.use(newLang);
  }
}
