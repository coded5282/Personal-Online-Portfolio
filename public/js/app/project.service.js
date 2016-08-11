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
    ProjectService.prototype.getAllProjects = function () {
        return this._http.get('https://webdevmean-coded5282.c9users.io/projects')
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
        //.catch(error => Observable.throw(error.json())); 
    };
    ProjectService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ProjectService);
    return ProjectService;
}());
exports.ProjectService = ProjectService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsNENBQTRDO0FBQzVDLCtDQUErQztBQUMvQyxtQ0FBbUM7QUFDbkMsOENBQThDO0FBQzlDLGlEQUFpRDtBQUNqRCx3QkFBc0IsV0FBVyxDQUFDLENBQUE7QUFFbEMscUJBQXVDLGVBQWUsQ0FBQyxDQUFBO0FBQ3ZELHFCQUE0QixlQUFlLENBQUMsQ0FBQTtBQUM1QyxRQUFPLFNBQVMsQ0FBQyxDQUFBO0FBR2pCO0lBSUksd0JBQXFCLEtBQVc7UUFBWCxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBSGhDLGFBQVEsR0FBYyxFQUFFLENBQUM7UUFDekIsa0JBQWEsR0FBRyxJQUFJLG1CQUFZLEVBQVcsQ0FBQztJQUVULENBQUM7SUFFcEMsdUNBQWMsR0FBZDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxrREFBa0QsQ0FBQzthQUNwRSxHQUFHLENBQUMsVUFBQSxRQUFRO1lBQ1QsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQztZQUNqQyxJQUFJLElBQUksR0FBVSxFQUFFLENBQUM7WUFDckIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ25DLElBQUksT0FBTyxHQUFHLElBQUksaUJBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNySSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3ZCLENBQUM7WUFBQSxDQUFDO1lBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FBQTtRQUNGLG1EQUFtRDtJQUMzRCxDQUFDO0lBbkJMO1FBQUMsaUJBQVUsRUFBRTs7c0JBQUE7SUF5RWIscUJBQUM7QUFBRCxDQXhFQSxBQXdFQyxJQUFBO0FBeEVZLHNCQUFjLGlCQXdFMUIsQ0FBQSIsImZpbGUiOiJwcm9qZWN0LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG4vLyBpbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gXCJhbmd1bGFyMi9odHRwXCI7XG4vLyAvLyBpbXBvcnQge1VzZXJ9IGZyb20gXCIuL3VzZXJcIjsgXG4vLyBpbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbi8vIGltcG9ydCB7UHJvamVjdH0gZnJvbSBcIi4uL21vZGVscy9wcm9qZWN0LmpzXCI7IFxuaW1wb3J0IHtQcm9qZWN0fSBmcm9tIFwiLi9wcm9qZWN0XCI7IFxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7IFxuaW1wb3J0IHtJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXJ9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7IFxuaW1wb3J0IHtIdHRwLCBIZWFkZXJzfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiOyBcbmltcG9ydCAncnhqcy9SeCc7IFxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJvamVjdFNlcnZpY2Uge1xuICAgIHByb2plY3RzOiBQcm9qZWN0W10gPSBbXTtcbiAgICBwcm9qZWN0SXNFZGl0ID0gbmV3IEV2ZW50RW1pdHRlcjxQcm9qZWN0PigpOyBcbiAgICBcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBfaHR0cDogSHR0cCkge31cbiAgICBcbiAgICBnZXRBbGxQcm9qZWN0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KCdodHRwczovL3dlYmRldm1lYW4tY29kZWQ1MjgyLmM5dXNlcnMuaW8vcHJvamVjdHMnKVxuICAgICAgICAgICAgLm1hcChyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmpzb24oKS5vYmo7XG4gICAgICAgICAgICAgICAgbGV0IG9ianM6IGFueVtdID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwcm9qZWN0ID0gbmV3IFByb2plY3QoZGF0YVtpXS5wcm9qZWN0SWQsIGRhdGFbaV0ubmFtZSwgZGF0YVtpXS5kZXNjcmlwdGlvbiwgZGF0YVtpXS50ZWNobm9sb2dpZXMsIGRhdGFbaV0uZ2l0aHViLCBkYXRhW2ldLmltYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgb2Jqcy5wdXNoKHByb2plY3QpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9ianM7IFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7IFxuICAgIH0gIFxuICAgIFxuICAgIC8vIGNyZWF0ZVByb2plY3QocHJvamVjdDogUHJvamVjdCkge1xuICAgIC8vICAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkocHJvamVjdCk7XG4gICAgLy8gICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xuICAgIC8vICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KCdodHRwczovL3dlYmRldm1lYW4tY29kZWQ1MjgyLmM5dXNlcnMuaW8vcHJvamVjdHMnLCBib2R5LCB7aGVhZGVyczogaGVhZGVyc30pXG4gICAgLy8gICAgICAgICAubWFwKHJlc3BvbnNlID0+IHtcbiAgICAvLyAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuanNvbigpLm9iajtcbiAgICAvLyAgICAgICAgICAgICBsZXQgcHJvamVjdCA9IG5ldyBQcm9qZWN0KGRhdGEucHJvamVjdElkLCBkYXRhLm5hbWUsIGRhdGEuZGVzY3JpcHRpb24sIGRhdGEudGVjaG5vbG9naWVzLCBkYXRhLmdpdGh1YiwgZGF0YS5pbWFnZSk7XG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIHByb2plY3Q7XG4gICAgLy8gICAgICAgICB9KVxuICAgIC8vICAgICAgICAgLy8uY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTsgXG4gICAgLy8gfVxuICAgIFxuICAgIC8vIGdldFByb2plY3QoKSB7XG4gICAgICAgIFxuICAgIC8vIH1cbiAgICBcbiAgICAvLyB1cGRhdGVQcm9qZWN0KCkge1xuICAgICAgICBcbiAgICAvLyB9XG4gICAgXG4gICAgLy8gZGVsZXRlUHJvamVjdChwcm9qZWN0OiBQcm9qZWN0KSB7XG4gICAgLy8gICAgIHRoaXMucHJvamVjdHMuc3BsaWNlKHRoaXMucHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KSwgMSk7XG4gICAgLy8gICAgIHJldHVybiB0aGlzLl9odHRwLmRlbGV0ZSgnaHR0cHM6Ly93ZWJkZXZtZWFuLWNvZGVkNTI4Mi5jOXVzZXJzLmlvL3Byb2plY3QvJyArIHByb2plY3QucHJvamVjdElkKVxuICAgIC8vICAgICAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLy8gICAgICAgICAvLy5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xuICAgIC8vIH1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgICBcbi8vICAgICB1cGRhdGVNZXNzYWdlKG1lc3NhZ2U6IE1lc3NhZ2UpIHtcbi8vICAgICAgICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpOyBcbi8vICAgICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XG4vLyAgICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgPyAnP3Rva2VuPScgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA6ICcnO1xuLy8gICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wYXRjaCgnaHR0cHM6Ly93ZWJkZXZtZWFuLWNvZGVkNTI4Mi5jOXVzZXJzLmlvL21lc3NhZ2UvJyArIG1lc3NhZ2UubWVzc2FnZUlkICsgdG9rZW4sIGJvZHksIHtoZWFkZXJzOiBoZWFkZXJzfSlcbi8vICAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuLy8gICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7ICAgICBcbi8vICAgICB9XG4gICAgXG4vLyAgICAgZWRpdE1lc3NhZ2UobWVzc2FnZTogTWVzc2FnZSkge1xuLy8gICAgICAgICB0aGlzLm1lc3NhZ2VJc0VkaXQuZW1pdChtZXNzYWdlKTsgXG4vLyAgICAgICAgIC8vIHRoaXMubWVzc2FnZXNbdGhpcy5tZXNzYWdlcy5pbmRleE9mKG1lc3NhZ2UpXSA9IG5ldyBNZXNzYWdlKCdFZGl0ZWQnLCBudWxsLCAnRHVtbXknKTsgXG4vLyAgICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
