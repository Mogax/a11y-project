import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'a11y-not-allowed-logged-in-page',
  standalone: true,
    imports: [CommonModule, RouterLink, TranslateModule],
  templateUrl: './not-allowed-logged-in-page.component.html',
  styleUrls: ['./not-allowed-logged-in-page.component.scss'],
})
export class NotAllowedLoggedInPageComponent {}
