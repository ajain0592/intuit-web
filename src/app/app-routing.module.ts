import { SecureHomeTemplateComponent } from "./secure/landing/securehomeTemplate.component";
import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { ProfileComponent } from "./secure/profile/profile/profile.component";
import { QuickbooksComponent } from "./secure/quickbooks/quickbooks.component";
import { TsheetsComponent } from "./secure/tsheets/tsheets.component";
import { ViewstatusComponent } from "./viewstatus/viewstatus.component";

const secureHomeRoutes: Routes = [
  {
    path: "",
    redirectTo: "/securehome",
    pathMatch: "full",
  },
  {
    path: "securehome",
    component: SecureHomeTemplateComponent,
    data: { title: "Home" },
    children: [
      {
        path: "profile",
        component: ProfileComponent,
        data: {
          title: "Profiles",
        },
      },
      {
        path: "quickbooks",
        component: QuickbooksComponent,
        data: {
          title: "Quick books",
        },
      },
      {
        path: "tsheets",
        component: TsheetsComponent,
        data: {
          title: "T Sheets",
        },
      },
      {
        path: "viewrequest",
        component: ViewstatusComponent,
        data: {
          title: "View Request",
        },
      }
    ],
  },
];


const routes: Routes = [
  {
    path: "",
    children: [
      ...secureHomeRoutes
    ],
  },
];

export const appRoutingProviders: any[] = [];

export const AppRoutingModule: ModuleWithProviders =
  RouterModule.forRoot(routes);
