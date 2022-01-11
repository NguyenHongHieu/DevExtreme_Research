import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxBulletModule, DxButtonModule, DxDataGridModule } from 'devextreme-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgramListComponent } from './program/program-list/program-list.component';
import { ProgramFormDetailComponent } from './program/program-form-detail/program-form-detail.component';
import { ProgramOfferingComponent } from './program/program-offering/program-offering.component';
import { NotFoundComponent } from './program/not-found/not-found.component';
import { SearchFormComponent } from './shared/search-form/search-form.component';


const DEVEXTREME_MODULES = [
  DxBulletModule,
  DxButtonModule,
  DxDataGridModule
];

@NgModule({
  declarations: [
    AppComponent,
    ProgramListComponent,
    ProgramFormDetailComponent,
    ProgramOfferingComponent,
    NotFoundComponent,
    SearchFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...DEVEXTREME_MODULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
