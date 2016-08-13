"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import {Component, Input, Output, EventEmitter} from "angular2/core"; 
// import {Message} from "./message"; 
var core_1 = require("@angular/core");
var project_1 = require("./project");
var ProjectComponent = (function () {
    function ProjectComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', project_1.Project)
    ], ProjectComponent.prototype, "project", void 0);
    ProjectComponent = __decorate([
        core_1.Component({
            selector: 'my-project',
            template: "\n        <div class=\"panel panel-info\">\n            <div class=\"panel-heading\">{{ project.name }}</div>\n            <div class=\"panel-body\">{{ project.description }}</div>\n            <div class=\"panel-footer\">{{ project.technologies }}</div>\n        </div>\n    ",
            styles: ["\n        .author {\n            display: inline-block; \n            font-style: italic;\n            font-size: 12px;\n            width: 80%;\n        }\n        .config {\n            display: inline-block;\n            text-align: right;\n            font-size: 12px;\n            width: 19%; \n        }\n        #project_display {\n            margin-top: 20px; \n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], ProjectComponent);
    return ProjectComponent;
}());
exports.ProjectComponent = ProjectComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx5RUFBeUU7QUFDekUsc0NBQXNDO0FBQ3RDLHFCQUFxRCxlQUFlLENBQUMsQ0FBQTtBQUNyRSx3QkFBc0IsV0FBVyxDQUFDLENBQUE7QUE2QmxDO0lBQUE7SUFHQSxDQUFDO0lBRkc7UUFBQyxZQUFLLEVBQUU7O3FEQUFBO0lBNUJaO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxzUkFNVDtZQUNELE1BQU0sRUFBRSxDQUFDLG9ZQWdCUixDQUFDO1NBQ0wsQ0FBQzs7d0JBQUE7SUFJRix1QkFBQztBQUFELENBSEEsQUFHQyxJQUFBO0FBSFksd0JBQWdCLG1CQUc1QixDQUFBIiwiZmlsZSI6InByb2plY3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjsgXG4vLyBpbXBvcnQge01lc3NhZ2V9IGZyb20gXCIuL21lc3NhZ2VcIjsgXG5pbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiOyBcbmltcG9ydCB7UHJvamVjdH0gZnJvbSBcIi4vcHJvamVjdFwiOyBcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1wcm9qZWN0JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtaW5mb1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmdcIj57eyBwcm9qZWN0Lm5hbWUgfX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+e3sgcHJvamVjdC5kZXNjcmlwdGlvbiB9fTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWZvb3RlclwiPnt7IHByb2plY3QudGVjaG5vbG9naWVzIH19PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgc3R5bGVzOiBbYFxuICAgICAgICAuYXV0aG9yIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgXG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICB9XG4gICAgICAgIC5jb25maWcge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB3aWR0aDogMTklOyBcbiAgICAgICAgfVxuICAgICAgICAjcHJvamVjdF9kaXNwbGF5IHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7IFxuICAgICAgICB9XG4gICAgYF1cbn0pXG5leHBvcnQgY2xhc3MgUHJvamVjdENvbXBvbmVudCB7XG4gICAgQElucHV0KCkgcHJvamVjdDpQcm9qZWN0O1xuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
