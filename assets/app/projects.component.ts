import {Component, OnInit} from "@angular/core";
import {ProjectService} from "./project.service"; 
import {Project} from "./project"; 
import {ProjectComponent} from "./project.component"; 

@Component({
    moduleId: module.id,
    selector: 'my-projects',
    styleUrls: ['/stylesheets/style.css', '/stylesheets/bootstrap.min.css', '/stylesheets/one-page-wonder.css'],
    templateUrl: 'projects.component.html',
    directives: [ProjectComponent]
})

export class ProjectsComponent implements OnInit {
    
    constructor(private _projectService: ProjectService) {}
    
    projects: Project[] = [];
    
    ngOnInit() {
        this._projectService.getAllProjects()
            .subscribe(
                projects => {
                    this.projects = projects;
                    this._projectService.projects = projects; 
                }
            ); 
    }
}
