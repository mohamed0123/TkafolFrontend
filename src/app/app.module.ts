import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule , routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatMenuModule} from '@angular/material/menu';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatSortModule  } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule , MatNativeDateModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
 import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
 import { MatConfirmDialogComponent } from './pages/helper/mat-confirm-dialog/mat-confirm-dialog.component';
import { MaterialModule } from './material/material/material.module';
import { ExcelService } from './helper/excel.service';
 import { DatePipe } from '@angular/common';
import { AreaComponent } from './pages/area/area.component';
import { CreateComponent } from './pages/area/create/create.component';
import { EditComponent } from './pages/area/edit/edit.component';
import { DiseasesComponent } from './pages/diseases/diseases.component';
import { EditDiseasesComponent } from './pages/diseases/edit-diseases/edit-diseases.component';
import { CreateDiseasesComponent } from './pages/diseases/create-diseases/create-diseases.component';
import { GovernmentComponent } from './pages/government/government.component';
import { EditGovernmentComponent } from './pages/government/edit-government/edit-government.component';
import { CreateGovernmentComponent } from './pages/government/create-government/create-government.component';
import { GenderComponent } from './pages/gender/gender.component';
import { EditGenderComponent } from './pages/gender/edit-gender/edit-gender.component';
import { CreateGenderComponent } from './pages/gender/create-gender/create-gender.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { EditJobsComponent } from './pages/jobs/edit-jobs/edit-jobs.component';
import { CreateJobsComponent } from './pages/jobs/create-jobs/create-jobs.component';
import { MaterialStateComponent } from './pages/material-state/material-state.component';
import { EditMaterialStateComponent } from './pages/material-state/edit-material-state/edit-material-state.component';
import { CreateMaterialStateComponent } from './pages/material-state/create-material-state/create-material-state.component';
import { ResearchTypeComponent } from './pages/research-type/research-type.component';
import { EditResearchTypeComponent } from './pages/research-type/edit-research-type/edit-research-type.component';
import { CreateResearchTypeComponent } from './pages/research-type/create-research-type/create-research-type.component';
import { UserRolesComponent } from './pages/user-roles/user-roles.component';
import { EditUserRolesComponent } from './pages/user-roles/edit-user-roles/edit-user-roles.component';
import { CreateUserRolesComponent } from './pages/user-roles/create-user-roles/create-user-roles.component';
import { BranchComponent } from './pages/branch/branch.component';
import { EditBranchComponent } from './pages/branch/edit-branch/edit-branch.component';
import { CreateBranchComponent } from './pages/branch/create-branch/create-branch.component';
import { UsersComponent } from './pages/users/users.component';
import { EditUsersComponent } from './pages/users/edit-users/edit-users.component';
import { CreateUsersComponent } from './pages/users/create-users/create-users.component';
 
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    routingComponents,
     MatConfirmDialogComponent,
     AreaComponent,
     CreateComponent,
     EditComponent,
     DiseasesComponent,
     EditDiseasesComponent,
     CreateDiseasesComponent,
     GovernmentComponent,
     EditGovernmentComponent,
     CreateGovernmentComponent,
     GenderComponent,
     EditGenderComponent,
     CreateGenderComponent,
     JobsComponent,
     EditJobsComponent,
     CreateJobsComponent,
     MaterialStateComponent,
     EditMaterialStateComponent,
     CreateMaterialStateComponent,
     ResearchTypeComponent,
     EditResearchTypeComponent,
     CreateResearchTypeComponent,
     UserRolesComponent,
     EditUserRolesComponent,
     CreateUserRolesComponent,
     BranchComponent,
     EditBranchComponent,
     CreateBranchComponent,
     UsersComponent,
     EditUsersComponent,
     CreateUsersComponent,
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    HttpClientModule,
    MatSortModule,
    MatInputModule,
    MatAutocompleteModule,
    MatCardModule,
    MatSelectModule,
    MatGridListModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MaterialModule,
    MatMenuModule, 
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
  ],
  providers: [MatDatepickerModule,  ExcelService , DatePipe],
  bootstrap: [AppComponent],
  entryComponents:[ CreateComponent ,CreateUsersComponent ,CreateBranchComponent , CreateUserRolesComponent, CreateResearchTypeComponent, CreateMaterialStateComponent , CreateJobsComponent,CreateGenderComponent, CreateGovernmentComponent, CreateDiseasesComponent , MatConfirmDialogComponent]
})
export class AppModule { }
