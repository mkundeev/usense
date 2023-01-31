import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'usense';
  password: string;
  fwdPassword($event: string) {
    this.password = $event;
  }
}
