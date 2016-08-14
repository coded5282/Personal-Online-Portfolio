// import {Component, Input, Output, EventEmitter} from "angular2/core"; 
// import {Message} from "./message"; 
import {Component, Input, Output, EventEmitter} from "@angular/core"; 
import {Project} from "./project"; 

@Component({
    selector: 'my-project',
    template: `
        <div class="panel panel-info">
            <div class="panel-heading"><strong>{{ project.name }}</strong></div>
            <div class="panel-body">
                <p>{{ project.description }}</p>
                <p><strong>Github:</strong> {{ project.github }}</p>
            </div>
            <div class="panel-footer">{{ project.technologies }}</div>
        </div>
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
        #project_display {
            margin-top: 20px; 
        }
    `]
})
export class ProjectComponent {
    @Input() project:Project;

}