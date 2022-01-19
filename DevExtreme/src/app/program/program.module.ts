import { ProgramListComponent } from './program-list/program-list.component';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ProgramFormDetailComponent } from './program-form-detail/program-form-detail.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'programs',
        pathMatch: 'full',
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
];
@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [],
    providers: [],
})
export class programModule { }