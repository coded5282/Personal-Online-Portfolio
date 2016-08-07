import { Component } from '@angular/core';

import { AlertComponent } from 'ng2-bootstrap/ng2-bootstrap';
import {ROUTER_DIRECTIVES} from "@angular/router"; 
import {ProjectsComponent} from "./projects.component";
import {HeaderComponent} from "./header.component"; 


@Component({
    moduleId: module.id,
    selector: 'my-app',
    template:`
        <div class="container">
            <my-header></my-header>
            <router-outlet></router-outlet>
        </div>`,
    directives: [AlertComponent, ROUTER_DIRECTIVES, HeaderComponent]
})

export class AppComponent {
    // public alerts:Array<Object> = [
    //     {
    //         type: 'danger',
    //         msg: 'Oh snap! Change a few things up and try submitting again.'
    //     },
    //     {
    //         type: 'success',
    //         msg: 'Well done! You successfully read this important alert message.',
    //         closable: true
    //     }
    // ];

    // public closeAlert(i:number):void {
    //     this.alerts.splice(i, 1);
    // }

    // public addAlert():void {
    //     this.alerts.push({msg: 'Another alert!', type: 'warning', closable: true});
    // }
}