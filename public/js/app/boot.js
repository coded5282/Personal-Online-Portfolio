"use strict";
/// <reference path="../../typings.d.ts" />
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var common_1 = require("@angular/common");
// import {ROUTER_PROVIDERS} from "@angular/router"; 
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var project_service_1 = require("./project.service");
var app_routes_1 = require("./app.routes");
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [project_service_1.ProjectService, app_routes_1.APP_ROUTER_PROVIDERS, core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy }), http_1.HTTP_PROVIDERS]);
// ///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>
// import {bootstrap} from 'angular2/platform/browser';
// import {AppComponent} from "./app.component";
// import {MessageService} from "./messages/message.service";
// import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from "angular2/router"; 
// import {provide} from "angular2/core"; 
// import {HTTP_PROVIDERS} from "angular2/http"; 
// import {AuthService} from "./auth/auth.service"; 
// import {ErrorService} from "./errors/error.service"; 
// bootstrap(AppComponent, [MessageService, AuthService, ErrorService, ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy}), HTTP_PROVIDERS]); 

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDJDQUEyQztBQUMzQyx5Q0FBMEIsbUNBQW1DLENBQUMsQ0FBQTtBQUU5RCw4QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUUvQyx1QkFBcUQsaUJBQWlCLENBQUMsQ0FBQTtBQUN2RSxxREFBcUQ7QUFDckQscUJBQXNCLGVBQWUsQ0FBQyxDQUFBO0FBQ3RDLHFCQUE2QixlQUFlLENBQUMsQ0FBQTtBQUU3QyxnQ0FBNkIsbUJBQW1CLENBQUMsQ0FBQTtBQUNqRCwyQkFBbUMsY0FBYyxDQUFDLENBQUE7QUFFbEQsb0NBQVMsQ0FBQyw0QkFBWSxFQUFFLENBQUMsZ0NBQWMsRUFBRSxpQ0FBb0IsRUFBRSxjQUFPLENBQUMseUJBQWdCLEVBQUUsRUFBQyxRQUFRLEVBQUUsNkJBQW9CLEVBQUMsQ0FBQyxFQUFFLHFCQUFjLENBQUMsQ0FBQyxDQUFDO0FBTzdJLDBFQUEwRTtBQUMxRSx1REFBdUQ7QUFDdkQsZ0RBQWdEO0FBQ2hELDZEQUE2RDtBQUM3RCw2RkFBNkY7QUFDN0YsMENBQTBDO0FBQzFDLGlEQUFpRDtBQUNqRCxvREFBb0Q7QUFDcEQsd0RBQXdEO0FBRXhELHVLQUF1SyIsImZpbGUiOiJib290LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MuZC50c1wiIC8+XG5pbXBvcnQgeyBib290c3RyYXAgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xuXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuXG5pbXBvcnQge0xvY2F0aW9uU3RyYXRlZ3ksIEhhc2hMb2NhdGlvblN0cmF0ZWd5fSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7IFxuLy8gaW1wb3J0IHtST1VURVJfUFJPVklERVJTfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7IFxuaW1wb3J0IHtwcm92aWRlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiOyBcbmltcG9ydCB7SFRUUF9QUk9WSURFUlN9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5cbmltcG9ydCB7UHJvamVjdFNlcnZpY2V9IGZyb20gXCIuL3Byb2plY3Quc2VydmljZVwiOyBcbmltcG9ydCB7QVBQX1JPVVRFUl9QUk9WSURFUlN9IGZyb20gXCIuL2FwcC5yb3V0ZXNcIjsgXG5cbmJvb3RzdHJhcChBcHBDb21wb25lbnQsIFtQcm9qZWN0U2VydmljZSwgQVBQX1JPVVRFUl9QUk9WSURFUlMsIHByb3ZpZGUoTG9jYXRpb25TdHJhdGVneSwge3VzZUNsYXNzOiBIYXNoTG9jYXRpb25TdHJhdGVneX0pLCBIVFRQX1BST1ZJREVSU10pO1xuXG5cblxuXG5cblxuLy8gLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIvPlxuLy8gaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInO1xuLy8gaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbi8vIGltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gXCIuL21lc3NhZ2VzL21lc3NhZ2Uuc2VydmljZVwiO1xuLy8gaW1wb3J0IHtST1VURVJfUFJPVklERVJTLCBMb2NhdGlvblN0cmF0ZWd5LCBIYXNoTG9jYXRpb25TdHJhdGVneX0gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiOyBcbi8vIGltcG9ydCB7cHJvdmlkZX0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjsgXG4vLyBpbXBvcnQge0hUVFBfUFJPVklERVJTfSBmcm9tIFwiYW5ndWxhcjIvaHR0cFwiOyBcbi8vIGltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuL2F1dGgvYXV0aC5zZXJ2aWNlXCI7IFxuLy8gaW1wb3J0IHtFcnJvclNlcnZpY2V9IGZyb20gXCIuL2Vycm9ycy9lcnJvci5zZXJ2aWNlXCI7IFxuXG4vLyBib290c3RyYXAoQXBwQ29tcG9uZW50LCBbTWVzc2FnZVNlcnZpY2UsIEF1dGhTZXJ2aWNlLCBFcnJvclNlcnZpY2UsIFJPVVRFUl9QUk9WSURFUlMsIHByb3ZpZGUoTG9jYXRpb25TdHJhdGVneSwge3VzZUNsYXNzOiBIYXNoTG9jYXRpb25TdHJhdGVneX0pLCBIVFRQX1BST1ZJREVSU10pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
