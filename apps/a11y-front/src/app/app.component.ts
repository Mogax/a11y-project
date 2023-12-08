import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { en } from './translations/en';
import { fr } from './translations/fr';
import { CookieBannerComponent } from './components/cookie-banner/cookie-banner.component';
import { Meta, Title } from '@angular/platform-browser';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  standalone: true,
  imports: [RouterModule, CookieBannerComponent, HeaderComponent, FooterComponent],
  selector: 'a11y-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'a11y-front';

  constructor(
    private readonly translate: TranslateService,
    private readonly titleService: Title,
    private readonly metaService: Meta
  ) {
    this.manageTranslations();
  }

  ngOnInit(): void {
    this.translate.onLangChange.subscribe(() => {
      this.updateTitleAndMeta();
    });
    this.updateTitleAndMeta();
  }

  private manageTranslations() {
    // If you need to add a language, add it to the table below, and add a new "translate.setTranslation" line as well.
    const availableLanguages = ['en', 'fr'];
    this.translate.setTranslation('en', en);
    this.translate.setTranslation('fr', fr);
    this.translate.setDefaultLang(availableLanguages[0]);

    // This is a very basic language management system. It does not manage locales (en-US, en-GB, etc.), and the files
    // are imported statically. It might not scale well if we get so many translations.
    const browserLanguages = window.navigator?.languages || [];
    for (const language of browserLanguages) {
      const languageCode = language.split('-')[0]?.toLowerCase();
      if (availableLanguages.indexOf(languageCode) >= 0) {
        this.translate.use(languageCode);
        return;
      }
    }
  }

  private updateTitleAndMeta() {
    this.translate.get('siteTitle').subscribe((translatedTitle: string) => {
      this.titleService.setTitle(translatedTitle);
    });

    this.translate
      .get('siteMetaDescription')
      .subscribe((translatedDescription: string) => {
        this.metaService.updateTag({
          name: 'description',
          content: translatedDescription,
        });
      });
  }
}
