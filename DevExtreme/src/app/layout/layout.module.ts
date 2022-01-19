import { NotFoundComponent } from "./not-found/not-found.component";

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { NavbarComponent } from "./navbar/navbar.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'header',
        pathMatch: 'full',
    },
    {
        path: 'header',
        component: HeaderComponent,
    },
    {
        path: 'navbar',
        component: NavbarComponent,
    },
    {
        path: '**',
        component: NotFoundComponent,
    },
];
@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [],
    providers: [],
})
export class LayoutModule { }