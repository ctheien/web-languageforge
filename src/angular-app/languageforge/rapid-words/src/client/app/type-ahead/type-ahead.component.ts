import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

const sem_doms = require('../shared/sem-dom-data.js');

@Component({
    moduleId: module.id,
    selector: 'type-ahead',
    templateUrl: 'type-ahead.component.html'
})
export class TypeAheadComponent {
    search_results: Array<string>;
    search_text: FormControl = new FormControl();

    constructor() {
        this.search_text.valueChanges
        //           .debounceTime(300)
        //           .distinctUntilChanged()
            .map((result: string) => this.search_results.push(result));
    }
}
