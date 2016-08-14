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
        return this._http.get('https://enigmatic-beach-87249.herokuapp.com/#/projects')
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsNENBQTRDO0FBQzVDLCtDQUErQztBQUMvQyxtQ0FBbUM7QUFDbkMsOENBQThDO0FBQzlDLGlEQUFpRDtBQUNqRCx3QkFBc0IsV0FBVyxDQUFDLENBQUE7QUFFbEMscUJBQXVDLGVBQWUsQ0FBQyxDQUFBO0FBQ3ZELHFCQUE0QixlQUFlLENBQUMsQ0FBQTtBQUM1QyxRQUFPLFNBQVMsQ0FBQyxDQUFBO0FBR2pCO0lBSUksd0JBQXFCLEtBQVc7UUFBWCxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBSGhDLGFBQVEsR0FBYyxFQUFFLENBQUM7UUFDekIsa0JBQWEsR0FBRyxJQUFJLG1CQUFZLEVBQVcsQ0FBQztJQUVULENBQUM7SUFFcEMscUJBQXFCO0lBQ3JCLGdGQUFnRjtJQUNoRiw2QkFBNkI7SUFDN0IsZ0RBQWdEO0lBQ2hELG9DQUFvQztJQUNwQyxzREFBc0Q7SUFDdEQsd0pBQXdKO0lBQ3hKLHNDQUFzQztJQUN0QyxpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCLGFBQWE7SUFDYixNQUFNO0lBRU4sdUNBQWMsR0FBZDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyx3REFBd0QsQ0FBQzthQUMxRSxHQUFHLENBQUMsVUFBQSxRQUFRO1lBQ1QsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQztZQUNqQyxJQUFJLElBQUksR0FBVSxFQUFFLENBQUM7WUFDckIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ25DLElBQUksT0FBTyxHQUFHLElBQUksaUJBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNySSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3ZCLENBQUM7WUFBQSxDQUFDO1lBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FBQTtJQUNWLENBQUM7SUEvQkw7UUFBQyxpQkFBVSxFQUFFOztzQkFBQTtJQXFGYixxQkFBQztBQUFELENBcEZBLEFBb0ZDLElBQUE7QUFwRlksc0JBQWMsaUJBb0YxQixDQUFBIiwiZmlsZSI6InByb2plY3Quc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbi8vIGltcG9ydCB7SHR0cCwgSGVhZGVyc30gZnJvbSBcImFuZ3VsYXIyL2h0dHBcIjtcbi8vIC8vIGltcG9ydCB7VXNlcn0gZnJvbSBcIi4vdXNlclwiOyBcbi8vIGltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuLy8gaW1wb3J0IHtQcm9qZWN0fSBmcm9tIFwiLi4vbW9kZWxzL3Byb2plY3QuanNcIjsgXG5pbXBvcnQge1Byb2plY3R9IGZyb20gXCIuL3Byb2plY3RcIjsgXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjsgXG5pbXBvcnQge0luamVjdGFibGUsIEV2ZW50RW1pdHRlcn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjsgXG5pbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7IFxuaW1wb3J0ICdyeGpzL1J4JzsgXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcm9qZWN0U2VydmljZSB7XG4gICAgcHJvamVjdHM6IFByb2plY3RbXSA9IFtdO1xuICAgIHByb2plY3RJc0VkaXQgPSBuZXcgRXZlbnRFbWl0dGVyPFByb2plY3Q+KCk7IFxuICAgIFxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIF9odHRwOiBIdHRwKSB7fVxuICAgIFxuICAgIC8vIGdldEFsbFByb2plY3RzKCkge1xuICAgIC8vICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoJ2h0dHBzOi8vd2ViZGV2bWVhbi1jb2RlZDUyODIuYzl1c2Vycy5pby9wcm9qZWN0cycpXG4gICAgLy8gICAgICAgICAubWFwKHJlc3BvbnNlID0+IHtcbiAgICAvLyAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuanNvbigpLm9iajtcbiAgICAvLyAgICAgICAgICAgICBsZXQgb2JqczogYW55W10gPSBbXTtcbiAgICAvLyAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgbGV0IHByb2plY3QgPSBuZXcgUHJvamVjdChkYXRhW2ldLnByb2plY3RJZCwgZGF0YVtpXS5uYW1lLCBkYXRhW2ldLmRlc2NyaXB0aW9uLCBkYXRhW2ldLnRlY2hub2xvZ2llcywgZGF0YVtpXS5naXRodWIsIGRhdGFbaV0uaW1hZ2UpO1xuICAgIC8vICAgICAgICAgICAgICAgICBvYmpzLnB1c2gocHJvamVjdCk7XG4gICAgLy8gICAgICAgICAgICAgfTtcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gb2JqczsgXG4gICAgLy8gICAgICAgICB9KVxuICAgIC8vIH0gIFxuICAgIFxuICAgIGdldEFsbFByb2plY3RzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoJ2h0dHBzOi8vZW5pZ21hdGljLWJlYWNoLTg3MjQ5Lmhlcm9rdWFwcC5jb20vIy9wcm9qZWN0cycpXG4gICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuanNvbigpLm9iajtcbiAgICAgICAgICAgICAgICBsZXQgb2JqczogYW55W10gPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByb2plY3QgPSBuZXcgUHJvamVjdChkYXRhW2ldLnByb2plY3RJZCwgZGF0YVtpXS5uYW1lLCBkYXRhW2ldLmRlc2NyaXB0aW9uLCBkYXRhW2ldLnRlY2hub2xvZ2llcywgZGF0YVtpXS5naXRodWIsIGRhdGFbaV0uaW1hZ2UpO1xuICAgICAgICAgICAgICAgICAgICBvYmpzLnB1c2gocHJvamVjdCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqczsgXG4gICAgICAgICAgICB9KVxuICAgIH0gIFxuICAgIFxuICAgIC8vIGNyZWF0ZVByb2plY3QocHJvamVjdDogUHJvamVjdCkge1xuICAgIC8vICAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkocHJvamVjdCk7XG4gICAgLy8gICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xuICAgIC8vICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KCdodHRwczovL3dlYmRldm1lYW4tY29kZWQ1MjgyLmM5dXNlcnMuaW8vcHJvamVjdHMnLCBib2R5LCB7aGVhZGVyczogaGVhZGVyc30pXG4gICAgLy8gICAgICAgICAubWFwKHJlc3BvbnNlID0+IHtcbiAgICAvLyAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuanNvbigpLm9iajtcbiAgICAvLyAgICAgICAgICAgICBsZXQgcHJvamVjdCA9IG5ldyBQcm9qZWN0KGRhdGEucHJvamVjdElkLCBkYXRhLm5hbWUsIGRhdGEuZGVzY3JpcHRpb24sIGRhdGEudGVjaG5vbG9naWVzLCBkYXRhLmdpdGh1YiwgZGF0YS5pbWFnZSk7XG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIHByb2plY3Q7XG4gICAgLy8gICAgICAgICB9KVxuICAgIC8vICAgICAgICAgLy8uY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTsgXG4gICAgLy8gfVxuICAgIFxuICAgIC8vIGdldFByb2plY3QoKSB7XG4gICAgICAgIFxuICAgIC8vIH1cbiAgICBcbiAgICAvLyB1cGRhdGVQcm9qZWN0KCkge1xuICAgICAgICBcbiAgICAvLyB9XG4gICAgXG4gICAgLy8gZGVsZXRlUHJvamVjdChwcm9qZWN0OiBQcm9qZWN0KSB7XG4gICAgLy8gICAgIHRoaXMucHJvamVjdHMuc3BsaWNlKHRoaXMucHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KSwgMSk7XG4gICAgLy8gICAgIHJldHVybiB0aGlzLl9odHRwLmRlbGV0ZSgnaHR0cHM6Ly93ZWJkZXZtZWFuLWNvZGVkNTI4Mi5jOXVzZXJzLmlvL3Byb2plY3QvJyArIHByb2plY3QucHJvamVjdElkKVxuICAgIC8vICAgICAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLy8gICAgICAgICAvLy5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xuICAgIC8vIH1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgICBcbi8vICAgICB1cGRhdGVNZXNzYWdlKG1lc3NhZ2U6IE1lc3NhZ2UpIHtcbi8vICAgICAgICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpOyBcbi8vICAgICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XG4vLyAgICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgPyAnP3Rva2VuPScgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA6ICcnO1xuLy8gICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wYXRjaCgnaHR0cHM6Ly93ZWJkZXZtZWFuLWNvZGVkNTI4Mi5jOXVzZXJzLmlvL21lc3NhZ2UvJyArIG1lc3NhZ2UubWVzc2FnZUlkICsgdG9rZW4sIGJvZHksIHtoZWFkZXJzOiBoZWFkZXJzfSlcbi8vICAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuLy8gICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7ICAgICBcbi8vICAgICB9XG4gICAgXG4vLyAgICAgZWRpdE1lc3NhZ2UobWVzc2FnZTogTWVzc2FnZSkge1xuLy8gICAgICAgICB0aGlzLm1lc3NhZ2VJc0VkaXQuZW1pdChtZXNzYWdlKTsgXG4vLyAgICAgICAgIC8vIHRoaXMubWVzc2FnZXNbdGhpcy5tZXNzYWdlcy5pbmRleE9mKG1lc3NhZ2UpXSA9IG5ldyBNZXNzYWdlKCdFZGl0ZWQnLCBudWxsLCAnRHVtbXknKTsgXG4vLyAgICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
