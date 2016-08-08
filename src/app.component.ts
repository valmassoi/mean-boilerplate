import {Component} from '@angular/core';
import './rxjs-extensions';

import { ROUTER_DIRECTIVES } from '@angular/router';

import { NavBarComponent } from './layout/navbar.component';

@Component({
    selector: 'my-app',
    template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES, NavBarComponent]
})
export class AppComponent {

}
