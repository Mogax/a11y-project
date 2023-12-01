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

  switchLanguage() {
    const currentLang = this.translate.currentLang;
    const newLang = currentLang === 'en' ? 'fr' : 'en';

    this.translate.use(newLang);
  }
}
