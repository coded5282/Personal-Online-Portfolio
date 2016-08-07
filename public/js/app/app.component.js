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
var router_1 = require("@angular/router");
var header_component_1 = require("./header.component");
// import {FooterComponent} from "./footer.component"; 
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            template: "\n        <my-header></my-header>\n        <div class=\"container\">\n            <router-outlet></router-outlet>\n        </div>",
            directives: [router_1.ROUTER_DIRECTIVES, header_component_1.HeaderComponent /*FooterComponent*/]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUcxQyx1QkFBZ0MsaUJBQWlCLENBQUMsQ0FBQTtBQUVsRCxpQ0FBOEIsb0JBQW9CLENBQUMsQ0FBQTtBQUVuRCx1REFBdUQ7QUFhdkQ7SUFBQTtJQW9CQSxDQUFDO0lBL0JEO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUMsbUlBSUU7WUFDWCxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsRUFBRSxrQ0FBZSxDQUFDLG1CQUFtQixDQUFDO1NBQ3ZFLENBQUM7O29CQUFBO0lBc0JGLG1CQUFDO0FBQUQsQ0FwQkEsQUFvQkMsSUFBQTtBQXBCWSxvQkFBWSxlQW9CeEIsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFsZXJ0Q29tcG9uZW50IH0gZnJvbSAnbmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwJztcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjsgXG5pbXBvcnQge1Byb2plY3RzQ29tcG9uZW50fSBmcm9tIFwiLi9wcm9qZWN0cy5jb21wb25lbnRcIjtcbmltcG9ydCB7SGVhZGVyQ29tcG9uZW50fSBmcm9tIFwiLi9oZWFkZXIuY29tcG9uZW50XCI7IFxuaW1wb3J0IHtIb21lQ29tcG9uZW50fSBmcm9tIFwiLi9ob21lLmNvbXBvbmVudFwiOyBcbi8vIGltcG9ydCB7Rm9vdGVyQ29tcG9uZW50fSBmcm9tIFwiLi9mb290ZXIuY29tcG9uZW50XCI7IFxuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTpgXG4gICAgICAgIDxteS1oZWFkZXI+PC9teS1oZWFkZXI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbiAgICAgICAgPC9kaXY+YCxcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIEhlYWRlckNvbXBvbmVudCAvKkZvb3RlckNvbXBvbmVudCovXVxufSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gICAgLy8gcHVibGljIGFsZXJ0czpBcnJheTxPYmplY3Q+ID0gW1xuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgICB0eXBlOiAnZGFuZ2VyJyxcbiAgICAvLyAgICAgICAgIG1zZzogJ09oIHNuYXAhIENoYW5nZSBhIGZldyB0aGluZ3MgdXAgYW5kIHRyeSBzdWJtaXR0aW5nIGFnYWluLidcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgIC8vICAgICAgICAgbXNnOiAnV2VsbCBkb25lISBZb3Ugc3VjY2Vzc2Z1bGx5IHJlYWQgdGhpcyBpbXBvcnRhbnQgYWxlcnQgbWVzc2FnZS4nLFxuICAgIC8vICAgICAgICAgY2xvc2FibGU6IHRydWVcbiAgICAvLyAgICAgfVxuICAgIC8vIF07XG5cbiAgICAvLyBwdWJsaWMgY2xvc2VBbGVydChpOm51bWJlcik6dm9pZCB7XG4gICAgLy8gICAgIHRoaXMuYWxlcnRzLnNwbGljZShpLCAxKTtcbiAgICAvLyB9XG5cbiAgICAvLyBwdWJsaWMgYWRkQWxlcnQoKTp2b2lkIHtcbiAgICAvLyAgICAgdGhpcy5hbGVydHMucHVzaCh7bXNnOiAnQW5vdGhlciBhbGVydCEnLCB0eXBlOiAnd2FybmluZycsIGNsb3NhYmxlOiB0cnVlfSk7XG4gICAgLy8gfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
