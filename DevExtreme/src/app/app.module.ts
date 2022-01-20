import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  DxBulletModule,
  DxButtonModule,
  DxDataGridModule,
  DxPopupModule,
  DxTemplateModule,
  DxNavBarModule,
  DxFormModule,
  DxCheckBoxModule,
  DxRadioGroupModule,
  DxTextBoxModule,
  DxSelectBoxModule,
  DxDateBoxModule,
  DxTextAreaModule,
  DxRangeSliderModule,
  DxMenuModule,
  DxPopoverModule,
  DxListModule,
  DxValidatorModule,
  DxDrawerModule,
  DxScrollViewModule,
  DxTreeViewModule,
} from 'devextreme-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgramListComponent } from './program/program-list/program-list.component';
import { ProgramFormDetailComponent } from './program/program-form-detail/program-form-detail.component';
import { ProgramOfferingComponent } from './program/program-offering/program-offering.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { SearchFormComponent } from './shared/search-form/search-form.component';
// import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavbarComponent } from './layout/navbar/navbar.component';

const DEVEXTREME_MODULES = [
  DxDateBoxModule,
  DxBulletModule,
  DxButtonModule,
  DxDataGridModule,
  DxNavBarModule,
  DxTextBoxModule,
  DxSelectBoxModule,
  DxPopupModule,
  DxButtonModule,
  DxTemplateModule,
  DxFormModule,
  DxCheckBoxModule,
  DxRadioGroupModule,
  DxTextAreaModule,
  DxRangeSliderModule,
  DxMenuModule,
  DxPopoverModule,
  DxListModule,
  DxValidatorModule,
  DxDrawerModule,
  DxScrollViewModule,
  DxTreeViewModule
];

@NgModule({
  declarations: [
    AppComponent,
    ProgramListComponent,
    ProgramFormDetailComponent,
    ProgramOfferingComponent,
    NotFoundComponent,
    SearchFormComponent,
    // LayoutComponent,
    HeaderComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ...DEVEXTREME_MODULES],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
