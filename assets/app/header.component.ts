import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
    selector: 'my-header',
    template: `
        <html>
            <head>
                <title>Edward Chen</title>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
            </head>
            <body>
                <nav class="navbar navbar-default">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <a class="navbar-brand" href="#" [routerLink]="['/home']">Edward Chen</a>
                        </div>
                        <div class="collapse navbar-collapse">
                            <ul class="nav navbar-nav navbar-right">
                                
                                <li><a href="#" [routerLink]="['/education']">Education</a></li>
                                <li><a href="#" [routerLink]="['/projects']">Projects</a></li>
                                <li><a href="#" [routerLink]="['/work']">Work</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
    `,
    directives: [ROUTER_DIRECTIVES],
    styles: [`
        header {
            margin-bottom: 20px;
        }
        
        ul {
            text-align: center;
        }
        
        li {
            float: none;
            display: inline-block; 
        }
        
        .router-link-active {
            background-color: #337ab7;
            color: white; 
        }
    `]
})

export class HeaderComponent {
    
}