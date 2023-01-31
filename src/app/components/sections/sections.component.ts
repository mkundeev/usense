import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import passwordLevel from 'src/app/helpers/passwordLevel';
@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss'],
})
export class SectionsComponent implements OnChanges {
  @Input() newPassword: string;
  length = 0;
  level = 0;
  constructor() {}
  ngOnChanges(changes: SimpleChanges) {
    this.length = changes?.newPassword?.currentValue?.length;
    this.level = passwordLevel(changes.newPassword?.currentValue || '');
  }
}
