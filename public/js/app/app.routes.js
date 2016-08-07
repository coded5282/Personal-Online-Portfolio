"use strict";
var projects_component_1 = require("./projects.component");
var router_1 = require("@angular/router");
var home_component_1 = require("./home.component");
var about_component_1 = require("./about.component");
var education_component_1 = require("./education.component");
var work_component_1 = require("./work.component");
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
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: 'education',
        component: education_component_1.EducationComponent
    },
    {
        path: 'work',
        component: work_component_1.WorkComponent
    },
    {
        path: '',
        redirectTo: '/home',
    }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(routes)
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLG1DQUFnQyxzQkFBc0IsQ0FBQyxDQUFBO0FBRXZELHVCQUEyQyxpQkFBaUIsQ0FBQyxDQUFBO0FBRTdELCtCQUE0QixrQkFBa0IsQ0FBQyxDQUFBO0FBQy9DLGdDQUE2QixtQkFBbUIsQ0FBQyxDQUFBO0FBQ2pELG9DQUFpQyx1QkFBdUIsQ0FBQyxDQUFBO0FBQ3pELCtCQUE0QixrQkFBa0IsQ0FBQyxDQUFBO0FBRS9DLElBQU0sTUFBTSxHQUFpQjtJQUMzQjtRQUNFLElBQUksRUFBRSxVQUFVO1FBQ2hCLFNBQVMsRUFBRSxzQ0FBaUI7S0FDN0I7SUFDRDtRQUNFLElBQUksRUFBRSxNQUFNO1FBQ1osU0FBUyxFQUFFLDhCQUFhO0tBQ3pCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsT0FBTztRQUNiLFNBQVMsRUFBRSxnQ0FBYztLQUMxQjtJQUNEO1FBQ0UsSUFBSSxFQUFFLFdBQVc7UUFDakIsU0FBUyxFQUFFLHdDQUFrQjtLQUM5QjtJQUNEO1FBQ0UsSUFBSSxFQUFFLE1BQU07UUFDWixTQUFTLEVBQUUsOEJBQWE7S0FDekI7SUFDRDtRQUNFLElBQUksRUFBRSxFQUFFO1FBQ1IsVUFBVSxFQUFFLE9BQU87S0FDcEI7Q0FDRixDQUFDO0FBRVcsNEJBQW9CLEdBQUc7SUFDbEMsc0JBQWEsQ0FBQyxNQUFNLENBQUM7Q0FDdEIsQ0FBQyIsImZpbGUiOiJhcHAucm91dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjsgXG5cbmltcG9ydCB7UHJvamVjdHNDb21wb25lbnR9IGZyb20gXCIuL3Byb2plY3RzLmNvbXBvbmVudFwiOyBcblxuaW1wb3J0IHtwcm92aWRlUm91dGVyLCBSb3V0ZXJDb25maWcgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7IFxuXG5pbXBvcnQge0hvbWVDb21wb25lbnR9IGZyb20gXCIuL2hvbWUuY29tcG9uZW50XCI7XG5pbXBvcnQge0Fib3V0Q29tcG9uZW50fSBmcm9tIFwiLi9hYm91dC5jb21wb25lbnRcIjsgXG5pbXBvcnQge0VkdWNhdGlvbkNvbXBvbmVudH0gZnJvbSBcIi4vZWR1Y2F0aW9uLmNvbXBvbmVudFwiOyBcbmltcG9ydCB7V29ya0NvbXBvbmVudH0gZnJvbSBcIi4vd29yay5jb21wb25lbnRcIjsgXG5cbmNvbnN0IHJvdXRlczogUm91dGVyQ29uZmlnID0gW1xuICB7XG4gICAgcGF0aDogJ3Byb2plY3RzJyxcbiAgICBjb21wb25lbnQ6IFByb2plY3RzQ29tcG9uZW50XG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnaG9tZScsXG4gICAgY29tcG9uZW50OiBIb21lQ29tcG9uZW50XG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnYWJvdXQnLFxuICAgIGNvbXBvbmVudDogQWJvdXRDb21wb25lbnRcbiAgfSxcbiAge1xuICAgIHBhdGg6ICdlZHVjYXRpb24nLFxuICAgIGNvbXBvbmVudDogRWR1Y2F0aW9uQ29tcG9uZW50XG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnd29yaycsXG4gICAgY29tcG9uZW50OiBXb3JrQ29tcG9uZW50XG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnJyxcbiAgICByZWRpcmVjdFRvOiAnL2hvbWUnLFxuICB9XG5dO1xuXG5leHBvcnQgY29uc3QgQVBQX1JPVVRFUl9QUk9WSURFUlMgPSBbXG4gIHByb3ZpZGVSb3V0ZXIocm91dGVzKVxuXTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
