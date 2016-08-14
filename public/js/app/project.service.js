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
// import {Injectable} from "angular2/core";
// import {Http, Headers} from "angular2/http";
// // import {User} from "./user"; 
// import {Observable} from "rxjs/Observable";
// import {Project} from "../models/project.js"; 
var project_1 = require("./project");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require('rxjs/Rx');
var ProjectService = (function () {
    function ProjectService(_http) {
        this._http = _http;
        this.projects = [];
        this.projectIsEdit = new core_1.EventEmitter();
    }
    // getAllProjects() {
    //     return this._http.get('https://webdevmean-coded5282.c9users.io/projects')
    //         .map(response => {
    //             const data = response.json().obj;
    //             let objs: any[] = [];
    //             for (let i = 0; i < data.length; i++) {
    //                 let project = new Project(data[i].projectId, data[i].name, data[i].description, data[i].technologies, data[i].github, data[i].image);
    //                 objs.push(project);
    //             };
    //             return objs; 
    //         })
    // }  
    ProjectService.prototype.getAllProjects = function () {
        return this._http.get('https://enigmatic-beach-87249.herokuapp.com/projects')
            .map(function (response) {
            var data = response.json().obj;
            var objs = [];
            for (var i = 0; i < data.length; i++) {
                var project = new project_1.Project(data[i].projectId, data[i].name, data[i].description, data[i].technologies, data[i].github, data[i].image);
                objs.push(project);
            }
            ;
            return objs;
        });
    };
    ProjectService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ProjectService);
    return ProjectService;
}());
exports.ProjectService = ProjectService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsNENBQTRDO0FBQzVDLCtDQUErQztBQUMvQyxtQ0FBbUM7QUFDbkMsOENBQThDO0FBQzlDLGlEQUFpRDtBQUNqRCx3QkFBc0IsV0FBVyxDQUFDLENBQUE7QUFFbEMscUJBQXVDLGVBQWUsQ0FBQyxDQUFBO0FBQ3ZELHFCQUE0QixlQUFlLENBQUMsQ0FBQTtBQUM1QyxRQUFPLFNBQVMsQ0FBQyxDQUFBO0FBR2pCO0lBSUksd0JBQXFCLEtBQVc7UUFBWCxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBSGhDLGFBQVEsR0FBYyxFQUFFLENBQUM7UUFDekIsa0JBQWEsR0FBRyxJQUFJLG1CQUFZLEVBQVcsQ0FBQztJQUVULENBQUM7SUFFcEMscUJBQXFCO0lBQ3JCLGdGQUFnRjtJQUNoRiw2QkFBNkI7SUFDN0IsZ0RBQWdEO0lBQ2hELG9DQUFvQztJQUNwQyxzREFBc0Q7SUFDdEQsd0pBQXdKO0lBQ3hKLHNDQUFzQztJQUN0QyxpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCLGFBQWE7SUFDYixNQUFNO0lBRU4sdUNBQWMsR0FBZDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxzREFBc0QsQ0FBQzthQUN4RSxHQUFHLENBQUMsVUFBQSxRQUFRO1lBQ1QsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQztZQUNqQyxJQUFJLElBQUksR0FBVSxFQUFFLENBQUM7WUFDckIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ25DLElBQUksT0FBTyxHQUFHLElBQUksaUJBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNySSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3ZCLENBQUM7WUFBQSxDQUFDO1lBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FBQTtJQUNWLENBQUM7SUEvQkw7UUFBQyxpQkFBVSxFQUFFOztzQkFBQTtJQXFGYixxQkFBQztBQUFELENBcEZBLEFBb0ZDLElBQUE7QUFwRlksc0JBQWMsaUJBb0YxQixDQUFBIiwiZmlsZSI6InByb2plY3Quc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbi8vIGltcG9ydCB7SHR0cCwgSGVhZGVyc30gZnJvbSBcImFuZ3VsYXIyL2h0dHBcIjtcbi8vIC8vIGltcG9ydCB7VXNlcn0gZnJvbSBcIi4vdXNlclwiOyBcbi8vIGltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuLy8gaW1wb3J0IHtQcm9qZWN0fSBmcm9tIFwiLi4vbW9kZWxzL3Byb2plY3QuanNcIjsgXG5pbXBvcnQge1Byb2plY3R9IGZyb20gXCIuL3Byb2plY3RcIjsgXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjsgXG5pbXBvcnQge0luamVjdGFibGUsIEV2ZW50RW1pdHRlcn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjsgXG5pbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7IFxuaW1wb3J0ICdyeGpzL1J4JzsgXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcm9qZWN0U2VydmljZSB7XG4gICAgcHJvamVjdHM6IFByb2plY3RbXSA9IFtdO1xuICAgIHByb2plY3RJc0VkaXQgPSBuZXcgRXZlbnRFbWl0dGVyPFByb2plY3Q+KCk7IFxuICAgIFxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIF9odHRwOiBIdHRwKSB7fVxuICAgIFxuICAgIC8vIGdldEFsbFByb2plY3RzKCkge1xuICAgIC8vICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoJ2h0dHBzOi8vd2ViZGV2bWVhbi1jb2RlZDUyODIuYzl1c2Vycy5pby9wcm9qZWN0cycpXG4gICAgLy8gICAgICAgICAubWFwKHJlc3BvbnNlID0+IHtcbiAgICAvLyAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuanNvbigpLm9iajtcbiAgICAvLyAgICAgICAgICAgICBsZXQgb2JqczogYW55W10gPSBbXTtcbiAgICAvLyAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgbGV0IHByb2plY3QgPSBuZXcgUHJvamVjdChkYXRhW2ldLnByb2plY3RJZCwgZGF0YVtpXS5uYW1lLCBkYXRhW2ldLmRlc2NyaXB0aW9uLCBkYXRhW2ldLnRlY2hub2xvZ2llcywgZGF0YVtpXS5naXRodWIsIGRhdGFbaV0uaW1hZ2UpO1xuICAgIC8vICAgICAgICAgICAgICAgICBvYmpzLnB1c2gocHJvamVjdCk7XG4gICAgLy8gICAgICAgICAgICAgfTtcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gb2JqczsgXG4gICAgLy8gICAgICAgICB9KVxuICAgIC8vIH0gIFxuICAgIFxuICAgIGdldEFsbFByb2plY3RzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoJ2h0dHBzOi8vZW5pZ21hdGljLWJlYWNoLTg3MjQ5Lmhlcm9rdWFwcC5jb20vcHJvamVjdHMnKVxuICAgICAgICAgICAgLm1hcChyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmpzb24oKS5vYmo7XG4gICAgICAgICAgICAgICAgbGV0IG9ianM6IGFueVtdID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwcm9qZWN0ID0gbmV3IFByb2plY3QoZGF0YVtpXS5wcm9qZWN0SWQsIGRhdGFbaV0ubmFtZSwgZGF0YVtpXS5kZXNjcmlwdGlvbiwgZGF0YVtpXS50ZWNobm9sb2dpZXMsIGRhdGFbaV0uZ2l0aHViLCBkYXRhW2ldLmltYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgb2Jqcy5wdXNoKHByb2plY3QpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9ianM7IFxuICAgICAgICAgICAgfSlcbiAgICB9ICBcbiAgICBcbiAgICAvLyBjcmVhdGVQcm9qZWN0KHByb2plY3Q6IFByb2plY3QpIHtcbiAgICAvLyAgICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHByb2plY3QpO1xuICAgIC8vICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTtcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCgnaHR0cHM6Ly93ZWJkZXZtZWFuLWNvZGVkNTI4Mi5jOXVzZXJzLmlvL3Byb2plY3RzJywgYm9keSwge2hlYWRlcnM6IGhlYWRlcnN9KVxuICAgIC8vICAgICAgICAgLm1hcChyZXNwb25zZSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmpzb24oKS5vYmo7XG4gICAgLy8gICAgICAgICAgICAgbGV0IHByb2plY3QgPSBuZXcgUHJvamVjdChkYXRhLnByb2plY3RJZCwgZGF0YS5uYW1lLCBkYXRhLmRlc2NyaXB0aW9uLCBkYXRhLnRlY2hub2xvZ2llcywgZGF0YS5naXRodWIsIGRhdGEuaW1hZ2UpO1xuICAgIC8vICAgICAgICAgICAgIHJldHVybiBwcm9qZWN0O1xuICAgIC8vICAgICAgICAgfSlcbiAgICAvLyAgICAgICAgIC8vLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7IFxuICAgIC8vIH1cbiAgICBcbiAgICAvLyBnZXRQcm9qZWN0KCkge1xuICAgICAgICBcbiAgICAvLyB9XG4gICAgXG4gICAgLy8gdXBkYXRlUHJvamVjdCgpIHtcbiAgICAgICAgXG4gICAgLy8gfVxuICAgIFxuICAgIC8vIGRlbGV0ZVByb2plY3QocHJvamVjdDogUHJvamVjdCkge1xuICAgIC8vICAgICB0aGlzLnByb2plY3RzLnNwbGljZSh0aGlzLnByb2plY3RzLmluZGV4T2YocHJvamVjdCksIDEpO1xuICAgIC8vICAgICByZXR1cm4gdGhpcy5faHR0cC5kZWxldGUoJ2h0dHBzOi8vd2ViZGV2bWVhbi1jb2RlZDUyODIuYzl1c2Vycy5pby9wcm9qZWN0LycgKyBwcm9qZWN0LnByb2plY3RJZClcbiAgICAvLyAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC8vICAgICAgICAgLy8uY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcbiAgICAvLyB9XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4gICAgXG4vLyAgICAgdXBkYXRlTWVzc2FnZShtZXNzYWdlOiBNZXNzYWdlKSB7XG4vLyAgICAgICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShtZXNzYWdlKTsgXG4vLyAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xuLy8gICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpID8gJz90b2tlbj0nICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgOiAnJztcbi8vICAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucGF0Y2goJ2h0dHBzOi8vd2ViZGV2bWVhbi1jb2RlZDUyODIuYzl1c2Vycy5pby9tZXNzYWdlLycgKyBtZXNzYWdlLm1lc3NhZ2VJZCArIHRva2VuLCBib2R5LCB7aGVhZGVyczogaGVhZGVyc30pXG4vLyAgICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbi8vICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpOyAgICAgXG4vLyAgICAgfVxuICAgIFxuLy8gICAgIGVkaXRNZXNzYWdlKG1lc3NhZ2U6IE1lc3NhZ2UpIHtcbi8vICAgICAgICAgdGhpcy5tZXNzYWdlSXNFZGl0LmVtaXQobWVzc2FnZSk7IFxuLy8gICAgICAgICAvLyB0aGlzLm1lc3NhZ2VzW3RoaXMubWVzc2FnZXMuaW5kZXhPZihtZXNzYWdlKV0gPSBuZXcgTWVzc2FnZSgnRWRpdGVkJywgbnVsbCwgJ0R1bW15Jyk7IFxuLy8gICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
