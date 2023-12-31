import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from "../../components/footer/footer.component";
import {HeaderComponent} from "../../components/header/header.component";

@Component({
  selector: 'a11y-home-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    HeaderComponent,
    TranslateModule,
    FooterComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {}
