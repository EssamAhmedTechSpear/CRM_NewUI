import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
    moduleId: module.id,
    templateUrl: './error401.html',
})
export class Error401Component {
    store: any;
    constructor(public router: Router, public storeData: Store<any>) {
        this.initStore();
    }
    async initStore() {
        this.storeData
            .select((d) => d.index)
            .subscribe((d) => {
                this.store = d;
            });
    }
}
