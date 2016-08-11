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
            template: "\n        <article class=\"panel panel-default\">\n            <div class=\"panel-body\">\n                {{ project.technologies }} \n            </div>\n            <footer class=\"panel-footer\">\n                <div class=\"author\">\n                    {{ project.description }} \n                </div>\n            </footer>\n        </article>\n    ",
            styles: ["\n        .author {\n            display: inline-block; \n            font-style: italic;\n            font-size: 12px;\n            width: 80%;\n        }\n        .config {\n            display: inline-block;\n            text-align: right;\n            font-size: 12px;\n            width: 19%; \n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], ProjectComponent);
    return ProjectComponent;
}());
exports.ProjectComponent = ProjectComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx5RUFBeUU7QUFDekUsc0NBQXNDO0FBQ3RDLHFCQUFxRCxlQUFlLENBQUMsQ0FBQTtBQUNyRSx3QkFBc0IsV0FBVyxDQUFDLENBQUE7QUErQmxDO0lBQUE7SUFJQSxDQUFDO0lBSEc7UUFBQyxZQUFLLEVBQUU7O3FEQUFBO0lBOUJaO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSwwV0FXVDtZQUNELE1BQU0sRUFBRSxDQUFDLDZUQWFSLENBQUM7U0FDTCxDQUFDOzt3QkFBQTtJQUtGLHVCQUFDO0FBQUQsQ0FKQSxBQUlDLElBQUE7QUFKWSx3QkFBZ0IsbUJBSTVCLENBQUEiLCJmaWxlIjoicHJvamVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiOyBcbi8vIGltcG9ydCB7TWVzc2FnZX0gZnJvbSBcIi4vbWVzc2FnZVwiOyBcbmltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7IFxuaW1wb3J0IHtQcm9qZWN0fSBmcm9tIFwiLi9wcm9qZWN0XCI7IFxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LXByb2plY3QnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cbiAgICAgICAgICAgICAgICB7eyBwcm9qZWN0LnRlY2hub2xvZ2llcyB9fSBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGZvb3RlciBjbGFzcz1cInBhbmVsLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhdXRob3JcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgcHJvamVjdC5kZXNjcmlwdGlvbiB9fSBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICA8L2FydGljbGU+XG4gICAgYCxcbiAgICBzdHlsZXM6IFtgXG4gICAgICAgIC5hdXRob3Ige1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyBcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbmZpZyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIHdpZHRoOiAxOSU7IFxuICAgICAgICB9XG4gICAgYF1cbn0pXG5leHBvcnQgY2xhc3MgUHJvamVjdENvbXBvbmVudCB7XG4gICAgQElucHV0KCkgcHJvamVjdDpQcm9qZWN0O1xuXG4gICAgXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
