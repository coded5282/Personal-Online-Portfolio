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
var core_1 = require("@angular/core");
var project_service_1 = require("./project.service");
var project_component_1 = require("./project.component");
var ProjectsComponent = (function () {
    function ProjectsComponent(_projectService) {
        this._projectService = _projectService;
        this.projects = [];
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._projectService.getAllProjects()
            .subscribe(function (projects) {
            _this.projects = projects;
            _this._projectService.projects = projects;
        });
    };
    ProjectsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-projects',
            styleUrls: ['/stylesheets/style.css', '/stylesheets/bootstrap.min.css', '/stylesheets/one-page-wonder.css'],
            templateUrl: 'projects.component.html',
            directives: [project_component_1.ProjectComponent]
        }), 
        __metadata('design:paramtypes', [project_service_1.ProjectService])
    ], ProjectsComponent);
    return ProjectsComponent;
}());
exports.ProjectsComponent = ProjectsComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBQ2hELGdDQUE2QixtQkFBbUIsQ0FBQyxDQUFBO0FBRWpELGtDQUErQixxQkFBcUIsQ0FBQyxDQUFBO0FBVXJEO0lBRUksMkJBQW9CLGVBQStCO1FBQS9CLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUVuRCxhQUFRLEdBQWMsRUFBRSxDQUFDO0lBRjZCLENBQUM7SUFJdkQsb0NBQVEsR0FBUjtRQUFBLGlCQVFDO1FBUEcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLEVBQUU7YUFDaEMsU0FBUyxDQUNOLFVBQUEsUUFBUTtZQUNKLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUM3QyxDQUFDLENBQ0osQ0FBQztJQUNWLENBQUM7SUF0Qkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixFQUFFLGdDQUFnQyxFQUFFLGtDQUFrQyxDQUFDO1lBQzNHLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsVUFBVSxFQUFFLENBQUMsb0NBQWdCLENBQUM7U0FDakMsQ0FBQzs7eUJBQUE7SUFpQkYsd0JBQUM7QUFBRCxDQWZBLEFBZUMsSUFBQTtBQWZZLHlCQUFpQixvQkFlN0IsQ0FBQSIsImZpbGUiOiJwcm9qZWN0cy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtQcm9qZWN0U2VydmljZX0gZnJvbSBcIi4vcHJvamVjdC5zZXJ2aWNlXCI7IFxuaW1wb3J0IHtQcm9qZWN0fSBmcm9tIFwiLi9wcm9qZWN0XCI7IFxuaW1wb3J0IHtQcm9qZWN0Q29tcG9uZW50fSBmcm9tIFwiLi9wcm9qZWN0LmNvbXBvbmVudFwiOyBcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ215LXByb2plY3RzJyxcbiAgICBzdHlsZVVybHM6IFsnL3N0eWxlc2hlZXRzL3N0eWxlLmNzcycsICcvc3R5bGVzaGVldHMvYm9vdHN0cmFwLm1pbi5jc3MnLCAnL3N0eWxlc2hlZXRzL29uZS1wYWdlLXdvbmRlci5jc3MnXSxcbiAgICB0ZW1wbGF0ZVVybDogJ3Byb2plY3RzLmNvbXBvbmVudC5odG1sJyxcbiAgICBkaXJlY3RpdmVzOiBbUHJvamVjdENvbXBvbmVudF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBQcm9qZWN0c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcHJvamVjdFNlcnZpY2U6IFByb2plY3RTZXJ2aWNlKSB7fVxuICAgIFxuICAgIHByb2plY3RzOiBQcm9qZWN0W10gPSBbXTtcbiAgICBcbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5fcHJvamVjdFNlcnZpY2UuZ2V0QWxsUHJvamVjdHMoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBwcm9qZWN0cyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvamVjdHMgPSBwcm9qZWN0cztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHJvamVjdFNlcnZpY2UucHJvamVjdHMgPSBwcm9qZWN0czsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTsgXG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
