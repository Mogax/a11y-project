import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import {HeaderComponent} from "../../components/header/header.component";

@Component({
  selector: 'a11y-lists-page',
  standalone: true,
    imports: [CommonModule, TranslateModule, HeaderComponent],
  templateUrl: './lists-page.component.html',
  styleUrls: ['./lists-page.component.scss'],
})
export class ListsPageComponent {}
