import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SectionsComponent } from './components/sections/sections.component';
import { PasswordComponent } from './components/password/password.component';

@NgModule({
  declarations: [AppComponent, PasswordComponent, SectionsComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
