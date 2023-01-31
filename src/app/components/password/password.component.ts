import { Component, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent {
  password = '';

  @Output() setPassword = new EventEmitter<string>();

  inputPassword() {
    this.setPassword.emit(this.password);
  }
}
