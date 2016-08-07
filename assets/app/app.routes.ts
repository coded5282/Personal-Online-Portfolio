import { ROUTER_DIRECTIVES} from "@angular/router"; 

import {ProjectsComponent} from "./projects.component"; 

import {provideRouter, RouterConfig } from "@angular/router"; 

import {HomeComponent} from "./home.component";
import {AboutComponent} from "./about.component"; 
import {EducationComponent} from "./education.component"; 
import {WorkComponent} from "./work.component"; 

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
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'education',
    component: EducationComponent
  },
  {
    path: 'work',
    component: WorkComponent
  },
  {
    path: '',
    redirectTo: '/home',
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];