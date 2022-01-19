import { LayoutComponent } from './layout/layout.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { ProgramOfferingComponent } from './program/program-offering/program-offering.component';
import { ProgramListComponent } from './program/program-list/program-list.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgramFormDetailComponent } from './program/program-form-detail/program-form-detail.component';

const routes: Routes = [
  {
    path: '',
    // redirectTo: 'programs',
    // pathMatch: 'full',
    loadChildren: () => import('./program/program.module').then((m) => m.programModule)
  },
  {
    path: 'header',
    loadChildren: () => import('./layout/layout.module').then((m) => m.LayoutModule)
  },
  // {
  //   path: 'programs',
  //   component: ProgramListComponent,
  // },
  // {
  //   path: 'programs/add',
  //   component: ProgramFormDetailComponent,
  // },
  // {
  //   path: 'programs/:id',
  //   component: ProgramFormDetailComponent,
  // },
  // {
  //   path: 'offering/add',
  //   component: ProgramOfferingComponent,
  // },
  // {
  //   path: '**',
  //   component: NotFoundComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
