import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FootBarComponent } from './foot-bar/foot-bar.component';
import { HeadBarComponent } from './head-bar/head-bar.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { JobsComponent } from './jobs/jobs.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { PolicyComponent } from './policy/policy.component';
import { InternshipComponent } from './internship/internship.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';



const routes: Routes = [
  // basic routes
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'policy', component: PolicyComponent },
  { path: 'internship', component: InternshipComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FootBarComponent,
    HeadBarComponent,
    ProjectsComponent,
    HomeComponent,
    JobsComponent,
    ContactComponent,
    ErrorComponent,
    PolicyComponent,
    InternshipComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
