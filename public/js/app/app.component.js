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
var core_1 = require('@angular/core');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var router_1 = require("@angular/router");
var header_component_1 = require("./header.component");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            template: "\n        <div class=\"container\">\n            <my-header></my-header>\n            <router-outlet></router-outlet>\n        </div>",
            directives: [ng2_bootstrap_1.AlertComponent, router_1.ROUTER_DIRECTIVES, header_component_1.HeaderComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUUxQyw4QkFBK0IsNkJBQTZCLENBQUMsQ0FBQTtBQUM3RCx1QkFBZ0MsaUJBQWlCLENBQUMsQ0FBQTtBQUVsRCxpQ0FBOEIsb0JBQW9CLENBQUMsQ0FBQTtBQWNuRDtJQUFBO0lBb0JBLENBQUM7SUEvQkQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBQyx1SUFJRTtZQUNYLFVBQVUsRUFBRSxDQUFDLDhCQUFjLEVBQUUsMEJBQWlCLEVBQUUsa0NBQWUsQ0FBQztTQUNuRSxDQUFDOztvQkFBQTtJQXNCRixtQkFBQztBQUFELENBcEJBLEFBb0JDLElBQUE7QUFwQlksb0JBQVksZUFvQnhCLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBbGVydENvbXBvbmVudCB9IGZyb20gJ25nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcCc7XG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7IFxuaW1wb3J0IHtQcm9qZWN0c0NvbXBvbmVudH0gZnJvbSBcIi4vcHJvamVjdHMuY29tcG9uZW50XCI7XG5pbXBvcnQge0hlYWRlckNvbXBvbmVudH0gZnJvbSBcIi4vaGVhZGVyLmNvbXBvbmVudFwiOyBcblxuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTpgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxteS1oZWFkZXI+PC9teS1oZWFkZXI+XG4gICAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgICAgIDwvZGl2PmAsXG4gICAgZGlyZWN0aXZlczogW0FsZXJ0Q29tcG9uZW50LCBST1VURVJfRElSRUNUSVZFUywgSGVhZGVyQ29tcG9uZW50XVxufSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gICAgLy8gcHVibGljIGFsZXJ0czpBcnJheTxPYmplY3Q+ID0gW1xuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgICB0eXBlOiAnZGFuZ2VyJyxcbiAgICAvLyAgICAgICAgIG1zZzogJ09oIHNuYXAhIENoYW5nZSBhIGZldyB0aGluZ3MgdXAgYW5kIHRyeSBzdWJtaXR0aW5nIGFnYWluLidcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgIC8vICAgICAgICAgbXNnOiAnV2VsbCBkb25lISBZb3Ugc3VjY2Vzc2Z1bGx5IHJlYWQgdGhpcyBpbXBvcnRhbnQgYWxlcnQgbWVzc2FnZS4nLFxuICAgIC8vICAgICAgICAgY2xvc2FibGU6IHRydWVcbiAgICAvLyAgICAgfVxuICAgIC8vIF07XG5cbiAgICAvLyBwdWJsaWMgY2xvc2VBbGVydChpOm51bWJlcik6dm9pZCB7XG4gICAgLy8gICAgIHRoaXMuYWxlcnRzLnNwbGljZShpLCAxKTtcbiAgICAvLyB9XG5cbiAgICAvLyBwdWJsaWMgYWRkQWxlcnQoKTp2b2lkIHtcbiAgICAvLyAgICAgdGhpcy5hbGVydHMucHVzaCh7bXNnOiAnQW5vdGhlciBhbGVydCEnLCB0eXBlOiAnd2FybmluZycsIGNsb3NhYmxlOiB0cnVlfSk7XG4gICAgLy8gfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
