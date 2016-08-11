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
            template: "\n        <div class=\"col-sm-3\">\n            <div id=\"project_display\">\n                <p>{{ project.name }}</p>\n                <img src=\"http://placehold.it/150x80?text=IMAGE\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\">\n            </div>\n        </div> \n    ",
            styles: ["\n        .author {\n            display: inline-block; \n            font-style: italic;\n            font-size: 12px;\n            width: 80%;\n        }\n        .config {\n            display: inline-block;\n            text-align: right;\n            font-size: 12px;\n            width: 19%; \n        }\n        #project_display {\n            margin-top: 20px; \n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], ProjectComponent);
    return ProjectComponent;
}());
exports.ProjectComponent = ProjectComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx5RUFBeUU7QUFDekUsc0NBQXNDO0FBQ3RDLHFCQUFxRCxlQUFlLENBQUMsQ0FBQTtBQUNyRSx3QkFBc0IsV0FBVyxDQUFDLENBQUE7QUE4QmxDO0lBQUE7SUFJQSxDQUFDO0lBSEc7UUFBQyxZQUFLLEVBQUU7O3FEQUFBO0lBN0JaO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxxU0FPVDtZQUNELE1BQU0sRUFBRSxDQUFDLG9ZQWdCUixDQUFDO1NBQ0wsQ0FBQzs7d0JBQUE7SUFLRix1QkFBQztBQUFELENBSkEsQUFJQyxJQUFBO0FBSlksd0JBQWdCLG1CQUk1QixDQUFBIiwiZmlsZSI6InByb2plY3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjsgXG4vLyBpbXBvcnQge01lc3NhZ2V9IGZyb20gXCIuL21lc3NhZ2VcIjsgXG5pbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiOyBcbmltcG9ydCB7UHJvamVjdH0gZnJvbSBcIi4vcHJvamVjdFwiOyBcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1wcm9qZWN0JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTNcIj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJwcm9qZWN0X2Rpc3BsYXlcIj5cbiAgICAgICAgICAgICAgICA8cD57eyBwcm9qZWN0Lm5hbWUgfX08L3A+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwOi8vcGxhY2Vob2xkLml0LzE1MHg4MD90ZXh0PUlNQUdFXCIgY2xhc3M9XCJpbWctcmVzcG9uc2l2ZVwiIHN0eWxlPVwid2lkdGg6MTAwJVwiIGFsdD1cIkltYWdlXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+IFxuICAgIGAsXG4gICAgc3R5bGVzOiBbYFxuICAgICAgICAuYXV0aG9yIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgXG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICB9XG4gICAgICAgIC5jb25maWcge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB3aWR0aDogMTklOyBcbiAgICAgICAgfVxuICAgICAgICAjcHJvamVjdF9kaXNwbGF5IHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7IFxuICAgICAgICB9XG4gICAgYF1cbn0pXG5leHBvcnQgY2xhc3MgUHJvamVjdENvbXBvbmVudCB7XG4gICAgQElucHV0KCkgcHJvamVjdDpQcm9qZWN0O1xuXG4gICAgXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
