import { DashboardComponent } from "./secure/dashboard/dashboard.component";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { SecureHomeSidebarComponent } from "./secure/landing/sidebar/securehomeSidebar.component";
import { SecureHomeTemplateComponent } from "./secure/landing/securehomeTemplate.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { StorageServiceModule } from "angular-webstorage-service";
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from "@coreui/angular";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { AlertModule } from "ngx-bootstrap/alert";

import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { TabsModule } from "ngx-bootstrap/tabs";
import { ChartsModule } from "ng2-charts/ng2-charts";
import { NgSelectizeModule } from "../../node_modules/ng-selectize";
import { NgProgressModule } from "ngx-progressbar";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import { ProfileComponent } from './secure/profile/profile/profile.component';
import { QuickbooksComponent } from './secure/quickbooks/quickbooks.component';
import { TsheetsComponent } from './secure/tsheets/tsheets.component';
import { ViewstatusComponent } from './viewstatus/viewstatus.component';
import { CustomRenderStatusComponent } from "./viewstatus/cutom-renderer/cutom-renderer.component";
@NgModule({
  declarations: [
    SecureHomeTemplateComponent,
    SecureHomeSidebarComponent,
    DashboardComponent,
    AppComponent,
    ProfileComponent,
    QuickbooksComponent,
    TsheetsComponent,
    ViewstatusComponent,
    CustomRenderStatusComponent
  ],
  entryComponents: [
    CustomRenderStatusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    NgSelectizeModule,
    ReactiveFormsModule,
    StorageServiceModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppHeaderModule,
    AppFooterModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    CarouselModule.forRoot(),
    NgProgressModule,
    Ng2SmartTableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
