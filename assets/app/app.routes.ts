import { ROUTER_DIRECTIVES} from "@angular/router"; 

import {ProjectsComponent} from "./projects.component"; 

import {provideRouter, RouterConfig } from "@angular/router"; 

const routes: RouterConfig = [
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: '',
    redirectTo: '/projects',
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];