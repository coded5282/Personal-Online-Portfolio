import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
    selector: 'my-footer',
    template: `
        
        
            </body>
        </html> 
        
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

export class FooterComponent {
    
}