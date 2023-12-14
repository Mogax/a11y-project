import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

export class ContactFormData {
  constructor(
    public name: string,
    public email: string,
    public phoneNumber: string,
    public message: string,
    public phoneNumberError: string = ''
  ) {}
}

@Component({
  selector: 'a11y-contact-page',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent {
  data = new ContactFormData('', '', '', '');
  router = inject(Router);

  onSubmit() {
    if (!this.data.phoneNumber.match(/[^+[0-9]{11}]/)) {
      this.data.phoneNumberError =
        'Il faut que le téléphone soit dans ce format : +[0-9]{11}';
      return;
    }
    alert('Thanks for your message!');
    console.log('Sent with', JSON.stringify(this.data));
    this.router.navigateByUrl('/');
  }
}
