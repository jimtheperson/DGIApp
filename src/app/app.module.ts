//ANGULAR
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//ANGULAR MATERIAL
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule } from "@angular/material/toolbar";
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatDividerModule } from "@angular/material/divider";

//DGI COMPONENTS
import { Header01Component } from './components/toolbars/header01/header01.component';
import { Footer01Component } from './components/toolbars/footer01/footer01.component';
import { Sidenav01Component } from './components/toolbars/sidenav01/sidenav01.component';
import { PageMainComponent } from './components/pages/page-main/page-main.component';
import { PageRoutingComponent } from './components/pages/page-routing/page-routing.component';

@NgModule({
  declarations: [
    AppComponent,
    Header01Component,
    Footer01Component,
    Sidenav01Component,
    PageMainComponent,
    PageRoutingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //ANGULAR MATERIAL
    MatSidenavModule,
    MatToolbarModule,
    MatBottomSheetModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
