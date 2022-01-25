import { FooterComponent } from './../footer/footer.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutComponent } from './layout.component';

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DEVEXTREME_MODULES } from '../app.module';

const COMPONENTS = [
    NavbarComponent,
    HeaderComponent,
    LayoutComponent,
    FooterComponent
];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [
        CommonModule,
        RouterModule,
        ...DEVEXTREME_MODULES
    ],
    exports: [...COMPONENTS],
    providers: [],
})
export class LayoutModule { }