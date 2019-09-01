import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { AreaComponent } from './pages/area/area.component';
import { DiseasesComponent } from './pages/diseases/diseases.component';
import { GovernmentComponent } from './pages/government/government.component';
import { GenderComponent } from './pages/gender/gender.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { MaterialStateComponent } from './pages/material-state/material-state.component';
import { ResearchTypeComponent } from './pages/research-type/research-type.component';
import { UserRolesComponent } from './pages/user-roles/user-roles.component';
import { BranchComponent } from './pages/branch/branch.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
{ path: '', redirectTo: 'area', pathMatch: 'full' },
{ path: 'login', redirectTo: 'area', pathMatch: 'full' },
{ path: 'login', component: LoginComponent },
{ path: 'area', component: AreaComponent },
{ path: 'diseases', component: DiseasesComponent },
{ path: 'government', component: GovernmentComponent },
{ path: 'gender', component: GenderComponent },
{ path: 'researchtype', component: ResearchTypeComponent },
{ path: 'users', component: UsersComponent },


{ path: 'userroles', component: UserRolesComponent },
{ path: 'branch', component: BranchComponent },

{ path: 'jobs', component: JobsComponent },
{ path: 'matyerialstate', component: MaterialStateComponent },
{ path: 'pageNotFound', component: PageNotFoundComponent },
{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [  LoginComponent,   PageNotFoundComponent ]
