import { Component } from '@angular/core';
import { LfApiService } from '../services/lf-api.service';
import { Http } from '@angular/http';

import { OnInit } from '@angular/core';

let lfApiServiceFactory = (http: Http) => {
    return new LfApiService(http, 'http://languageforge.local');
}

@Component({
  moduleId: module.id,
  selector: 'user-component',
  templateUrl: 'user.component.html',
  providers: [{
      provide: LfApiService,
      useFactory: lfApiServiceFactory,
      deps: [Http]
  }]
})
export class UserComponent implements OnInit {
    ngOnInit(): void {
        console.log('lf api inited');
        this.performAuthentication();
    }

    constructor(private lfApi: LfApiService) {
        console.log('constructed UserComponent');
    }

    performAuthentication() {
        this.lfApi.performAuthentication();
    }
}
