import { ROUTER_DIRECTIVES} from "@angular/router"; 

import {ProjectsComponent} from "./projects.component"; 

import {provideRouter, RouterConfig } from "@angular/router"; 

import {HomeComponent} from "./home.component"; 

const routes: RouterConfig = [
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: '/home',
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];