import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { NewsService } from './news.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'a11y-news-page',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, TranslateModule],
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss'],
})
export class NewsPageComponent {
  constructor() {
    this.setNotifications();
  }

  private readonly newsService = inject(NewsService);
  private translate = inject(TranslateService);

  allNews$ = this.newsService.getNews(this.translate.currentLang);

  private setNotifications() {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        // To use later
      }
    });
  }
}
