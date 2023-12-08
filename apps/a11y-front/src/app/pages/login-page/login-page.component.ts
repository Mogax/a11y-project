import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegisterModel } from '../register-page/register-page.component';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { TranslateModule } from '@ngx-translate/core';

export class LoginModel {
  constructor(public password: string, public email: string) {}
}

@Component({
  selector: 'a11y-login-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
  ],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  auth = inject(Auth);
  data: LoginModel = new LoginModel('', '');

  doNothing($event: ClipboardEvent) {
    $event.preventDefault();
  }

  reset() {
    this.data = new RegisterModel('', '', '');
  }

  login() {
    signInWithEmailAndPassword(this.auth, this.data.email, this.data.password)
      .then(() => {
        alert('Logged in!');
      })
      .catch(() => {
        alert('Error occurred');
      });
  }
}
