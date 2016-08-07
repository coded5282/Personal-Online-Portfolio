"use strict";
var projects_component_1 = require("./projects.component");
var router_1 = require("@angular/router");
var home_component_1 = require("./home.component");
var routes = [
    {
        path: 'projects',
        component: projects_component_1.ProjectsComponent
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: '',
        redirectTo: '/home',
    }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(routes)
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLG1DQUFnQyxzQkFBc0IsQ0FBQyxDQUFBO0FBRXZELHVCQUEyQyxpQkFBaUIsQ0FBQyxDQUFBO0FBRTdELCtCQUE0QixrQkFBa0IsQ0FBQyxDQUFBO0FBRS9DLElBQU0sTUFBTSxHQUFpQjtJQUMzQjtRQUNFLElBQUksRUFBRSxVQUFVO1FBQ2hCLFNBQVMsRUFBRSxzQ0FBaUI7S0FDN0I7SUFDRDtRQUNFLElBQUksRUFBRSxNQUFNO1FBQ1osU0FBUyxFQUFFLDhCQUFhO0tBQ3pCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsRUFBRTtRQUNSLFVBQVUsRUFBRSxPQUFPO0tBQ3BCO0NBQ0YsQ0FBQztBQUVXLDRCQUFvQixHQUFHO0lBQ2xDLHNCQUFhLENBQUMsTUFBTSxDQUFDO0NBQ3RCLENBQUMiLCJmaWxlIjoiYXBwLnJvdXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7IFxuXG5pbXBvcnQge1Byb2plY3RzQ29tcG9uZW50fSBmcm9tIFwiLi9wcm9qZWN0cy5jb21wb25lbnRcIjsgXG5cbmltcG9ydCB7cHJvdmlkZVJvdXRlciwgUm91dGVyQ29uZmlnIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiOyBcblxuaW1wb3J0IHtIb21lQ29tcG9uZW50fSBmcm9tIFwiLi9ob21lLmNvbXBvbmVudFwiOyBcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXJDb25maWcgPSBbXG4gIHtcbiAgICBwYXRoOiAncHJvamVjdHMnLFxuICAgIGNvbXBvbmVudDogUHJvamVjdHNDb21wb25lbnRcbiAgfSxcbiAge1xuICAgIHBhdGg6ICdob21lJyxcbiAgICBjb21wb25lbnQ6IEhvbWVDb21wb25lbnRcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcnLFxuICAgIHJlZGlyZWN0VG86ICcvaG9tZScsXG4gIH1cbl07XG5cbmV4cG9ydCBjb25zdCBBUFBfUk9VVEVSX1BST1ZJREVSUyA9IFtcbiAgcHJvdmlkZVJvdXRlcihyb3V0ZXMpXG5dOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
