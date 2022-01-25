import { LayoutComponent } from './../layout/layout.component';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { ProgramListComponent } from './program-list/program-list.component';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ProgramFormDetailComponent } from './program-form-detail/program-form-detail.component';
import { LayoutModule } from '../layout/layout.module';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'programs',
                pathMatch: 'full'
            },
            {
                path: 'programs',
                component: ProgramListComponent,
            },
            {
                path: 'programs/add',
                component: ProgramFormDetailComponent,
            },
            {
                path: 'programs/:id',
                component: ProgramFormDetailComponent,
            },
            {
                path: 'dashboard',
                component: DashboardComponent,
            }
        ]
    }
];
@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        LayoutModule,
        RouterModule.forChild(routes)],
    exports: [],
    providers: [],
})
export class programModule { }