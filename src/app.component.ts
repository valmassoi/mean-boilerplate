import {Component} from '@angular/core';
import './rxjs-extensions';

import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'my-app',
    template: `
    <h1>My Mern App [CHANGEME]</h1>
    <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent { }
