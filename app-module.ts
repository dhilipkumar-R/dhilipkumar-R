1.//<--- app.module.ts---->

import { NgModule } from '@angular/core';


@NgModule({
declarations:[],
imports:[],
providers:[],
bootstrap:[],
entryComponents:[]  
})

export class Appmodule{}


//1.declarations: The components, directives, and pipes that belong to this NgModule.
//2. imports: Other modules whose exported classes are needed by component templates declared in this NgModule.
//3.providers: Creators of services that this NgModule contributes to the global collection of services.
//4.bootstrap: The main application view, called the root component, which hosts all other application views. Only the root NgModule should set the bootstrap property.
//5.entryComponents : dynamically loaded components.



2.//<--- app.routing.module.ts---->


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const Routes: Routes = [
  {
    path: "",
    component: somecomponent,
    pathMatch: "full",
    canActivate: [GuardService],
    canActivateChild: [GuardService],
    canDeactivate: [GuardService],
    children : [{
      path:'',
      component somecomponent: 
    }]
    loadChildren : '.../home/somecomponent.module#somecomponent',
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(Routes),
    RouterModule.forRoot(Routes)
  ]
})
export class RoutingModule { }




//<----angular.json------>

//CLI configuration defaults for all projects in the workspace, including configuration options for build, serve, and test tools that the CLI uses, such as TSLint, Karma, and Protractor

//<----package.json------>

//Configures npm package dependencies that are available to all projects in the workspace. See npm documentation

//<----tslint.json------>

//Default TSLint
