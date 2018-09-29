import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'aip-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(translate: TranslateService) {

    translate.setDefaultLang('en-au');
    translate.use('en-au');

  }
  title = 'stats-manager';
}
