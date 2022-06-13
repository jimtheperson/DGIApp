import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageMainComponent } from "./components/pages/page-main/page-main.component";
import { PageRoutingComponent } from "./components/pages/page-routing/page-routing.component";
import { PageRoutingPresetsComponent } from "./components/pages/page-routing-presets/page-routing-presets.component";

const routes: Routes = [
  { path: 'page-main', component: PageMainComponent },
  { path: 'page-routing', component: PageRoutingComponent,
    children:[
      {
        path: 'page-routing-presets',
        component: PageRoutingPresetsComponent
      }
    ]
  },
  // { path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  PageMainComponent,
  PageRoutingComponent,
  PageRoutingPresetsComponent
]