import { NotFoundComponent } from './program/not-found/not-found.component';
import { ProgramOfferingComponent } from './program/program-offering/program-offering.component';
import { ProgramListComponent } from './program/program-list/program-list.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgramFormDetailComponent } from './program/program-form-detail/program-form-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'programlist',
    pathMatch: 'full',
  },
  {
    path: 'programlist',
    component: ProgramListComponent,
  },
  {
    path: 'programlist/add',
    component: ProgramFormDetailComponent,
  },
  {
    path: 'programlist/:id',
    component: ProgramFormDetailComponent,
  },
  {
    path: 'addOffering',
    component: ProgramOfferingComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
