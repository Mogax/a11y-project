import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { catchError, from, NEVER, take } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';

export class RegisterModel {
  constructor(
    public password: string,
    public confirmPassword: string,
    public email: string,
    public emailError: string = '',
    public passwordError: string = '',
    public confirmPasswordError: string = ''
  ) {}
}

@Component({
  selector: 'a11y-register-page',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent {
  data: RegisterModel = new RegisterModel('', '', '');
  auth = inject(Auth);

  register() {
    if (this.data.password !== this.data.confirmPassword) {
      this.data.confirmPasswordError = 'Passwords do not match!';
      return;
    }

    if (this.data.password.length < 8) {
      this.data.passwordError = 'Password must be at least 8 characters long!';
      return;
    }

    if (this.data.password.length > 12) {
      this.data.passwordError =
        'Password cannot be more than 12 characters long!';
      return;
    }

    if (this.data.password === this.data.password.toLowerCase()) {
      this.data.passwordError =
        'Password must contain at least one uppercase letter!';
      return;
    }

    if (this.data.password === this.data.password.toUpperCase()) {
      this.data.passwordError =
        'Password must contain at least one lowercase letter!';
      return;
    }

    if (!this.data.password.match(/[0-9]/)) {
      this.data.passwordError = 'Password must contain at least one number!';
      return;
    }

    if (!this.data.password.match(/[^a-zA-Z0-9]/)) {
      this.data.passwordError =
        'Password must contain at least one special character!';
      return;
    }

    if (!this.data.email.includes('@')) {
      this.data.emailError = 'Email must contain an @!';
      return;
    }

    if (!this.data.password.match(/[!?.]/)) {
      this.data.passwordError = 'These are not specific enough character';
      return;
    }

    this.data.emailError = '';
    this.data.passwordError = '';
    this.data.confirmPasswordError = '';

    from(
      createUserWithEmailAndPassword(
        this.auth,
        this.data.email,
        this.data.password
      )
    )
      .pipe(
        take(1),
        catchError(() => {
          alert('Something went wrong');
          return NEVER;
        })
      )
      .subscribe(() => alert('Success!'));
  }

  doNothing($event: ClipboardEvent) {
    $event.preventDefault();
  }

  reset() {
    this.data = new RegisterModel('', '', '');
  }

  checkPassword() {
    return this.data.password === this.data.confirmPassword;
  }
}
