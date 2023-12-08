import { Component, inject, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { NewsService } from './news.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr);

@Component({
  selector: 'a11y-news-page',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, TranslateModule],
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss'],
  providers: [DatePipe, { provide: LOCALE_ID, useValue: 'fr' }],
})
export class NewsPageComponent {
  constructor(private datePipe: DatePipe) {
    this.setNotifications();
  }

  private readonly newsService = inject(NewsService);
  private translate = inject(TranslateService);
  protected actualLang = this.translate.currentLang === 'fr' ? 'fr' : 'en';

  allNews$ = this.newsService.getNews(this.translate.currentLang);

  private setNotifications() {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        // To use later
      }
    });
  }

  formatDate(date: Date | string): string | null {
    if (typeof date === 'string') {
      date = new Date(date);
    }

    let dateFormat: string;

    console.log(this.actualLang);
    if (this.actualLang === 'en') {
      dateFormat = 'MMM d, y';
    } else {
      dateFormat = 'd MMM y';
    }

    return this.datePipe.transform(date, dateFormat, '', this.actualLang);
  }
}
