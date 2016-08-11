// import {Component, Input, Output, EventEmitter} from "angular2/core"; 
// import {Message} from "./message"; 
import {Component, Input, Output, EventEmitter} from "@angular/core"; 
import {Project} from "./project"; 

@Component({
    selector: 'my-project',
    template: `
        <article class="panel panel-default">
            <div class="panel-body">
                {{ project.technologies }} 
            </div>
            <footer class="panel-footer">
                <div class="author">
                    {{ project.description }} 
                </div>
            </footer>
        </article>
    `,
    styles: [`
        .author {
            display: inline-block; 
            font-style: italic;
            font-size: 12px;
            width: 80%;
        }
        .config {
            display: inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%; 
        }
    `]
})
export class ProjectComponent {
    @Input() project:Project;

    
}